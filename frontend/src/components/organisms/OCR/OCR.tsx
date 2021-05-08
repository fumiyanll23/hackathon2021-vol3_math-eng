/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef, useEffect, useCallback } from 'react'
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
  const videoRef = useRef<HTMLVideoElement>(null)

  const initWorker = useCallback(async () => {
    const wker = createWorker()
    await wker.load()
    await wker.loadLanguage('jpn')
    await wker.initialize('jpn')
    setWorker(wker)
  }, [setWorker])

  const initStream = useCallback(async () => {
    const stre = await navigator.mediaDevices.getUserMedia({
      video: { width: 450, height: 300 },
      audio: false,
    })
    setStream(stre)
  }, [setStream])

  const onRecognizeText = useCallback(() => {
    const timerId = setInterval(async () => {
      if (videoRef.current === null || !worker) return

      const c = document.createElement('canvas')
      c.width = 400
      c.height = 100
      c.getContext('2d')?.drawImage(
        videoRef.current,
        25,
        100,
        400,
        100,
        0,
        0,
        400,
        100
      )

      // canvasから文字を認識！！
      const {
        data: { text },
      } = await worker.recognize(c)
      setTxt(text.trim().replace(/ /g, ''))
    }, 2000)
    return () => clearInterval(timerId)
  }, [videoRef, setTxt, worker])

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
        <video ref={videoRef} autoPlay />
        {videoRef && <div className={styles.Rect} />}
      </div>
    </>
  )
}

export default OCR
