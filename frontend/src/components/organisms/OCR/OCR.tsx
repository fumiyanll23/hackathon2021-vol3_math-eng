/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { createWorker } from 'tesseract.js'

import styles from './styles.module.scss'

// ___________
//
interface OCRProps {
  setTxt: (txt: string) => void
}

// ___________
//
const OCR: React.VFC<OCRProps> = ({ setTxt }) => {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [worker, setWorker] = useState<Tesseract.Worker | null>(null)
  const [scrWidth, setScrWidth] = useState(450)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setScrWidth(Math.min(window.screen.width - 20, 450))
  }, [setScrWidth])

  const scrHeight = useMemo(() => {
    return (scrWidth * 2) / 3
  }, [scrWidth])

  const initWorker = useCallback(async () => {
    const wker = createWorker()
    await wker.load()
    await wker.loadLanguage('eng')
    await wker.initialize('eng')
    setWorker(wker)
  }, [setWorker])

  const initStream = useCallback(async () => {
    const stre = await navigator.mediaDevices.getUserMedia({
      video: { width: scrWidth, height: scrHeight },
      audio: false,
    })
    setStream(stre)
  }, [setStream, scrWidth, scrHeight])

  const onRecognizeText = useCallback(() => {
    const timerId = setInterval(async () => {
      if (videoRef.current === null || !worker) return

      const c = document.createElement('canvas')
      c.width = scrWidth
      c.height = scrHeight / 3
      c.getContext('2d')?.drawImage(
        videoRef.current,
        0,
        scrHeight / 3,
        scrWidth,
        scrHeight / 3,
        0,
        0,
        scrWidth,
        scrHeight / 3
      )

      // canvasから文字を認識！！
      const {
        data: { text },
      } = await worker.recognize(c)
      setTxt(text.trim().replace(/ /g, '').slice(0, 20))
    }, 5000)
    return () => clearInterval(timerId)
  }, [videoRef, setTxt, worker, scrWidth, scrHeight])

  useEffect(() => {
    if (!worker) initWorker()
    if (!stream) initStream()

    if (worker && stream && videoRef.current !== null) {
      videoRef.current.srcObject = stream
      const clear = onRecognizeText()
      return clear
    }
    return () => {
      '...'
    }
  }, [worker, stream, initStream, initWorker, onRecognizeText, videoRef])

  return (
    <>
      <div className={styles.OCR}>
        <video className={styles.Video} ref={videoRef} autoPlay />
        {videoRef && (
          <div
            className={styles.Rect}
            style={{ width: scrWidth, height: scrWidth / 3 }}
          />
        )}
      </div>
    </>
  )
}

export default OCR
