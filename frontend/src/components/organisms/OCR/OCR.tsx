/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { createWorker } from 'tesseract.js'

import { Loading } from '@/components/atoms/Icons'

import styles from './styles.module.scss'

// ___________
//
interface OCRProps {
  setTxt: (txt: string) => void
}

const width = 450
const height = (width * 2) / 3

// ___________
//
const OCR: React.VFC<OCRProps> = ({ setTxt }) => {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [worker, setWorker] = useState<Tesseract.Worker | null>(null)
  const [videoDOM, setVideoDOM] = useState<HTMLVideoElement | null>(null)
  const [ready, setReady] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const initWorker = useCallback(async () => {
    const wker = createWorker()
    await wker.load()
    await wker.loadLanguage('eng')
    await wker.initialize('eng')
    setWorker(wker)
  }, [setWorker])

  const initStream = useCallback(async () => {
    const stre = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
      audio: false,
    })
    setStream(stre)
  }, [setStream])

  const drawCanvas = useCallback(() => {
    const timerId = setInterval(async () => {
      if (!videoDOM || !canvasRef.current) return

      // const c = document.createElement('canvas')
      const c = canvasRef.current
      const cWidth = Math.min(window.innerWidth - 20, width)
      c.width = cWidth
      c.height = cWidth * (2 / 9)
      c.getContext('2d')?.drawImage(
        videoDOM,
        0,
        height / 3,
        width,
        height / 3,
        0,
        0,
        width,
        height / 3
      )
    }, 1000)
    return () => clearInterval(timerId)
  }, [videoDOM])

  const onRecognizeText = useCallback(() => {
    const timerId = setInterval(async () => {
      if (!videoDOM || !canvasRef.current || !worker) return

      // canvasから文字を認識！！
      const {
        data: { text },
      } = await worker.recognize(canvasRef.current)
      setTxt(text.trim().replace(/ /g, '').slice(0, 50))
    }, 5000)
    return () => clearInterval(timerId)
  }, [videoDOM, setTxt, worker])

  useEffect(() => {
    if (!worker) initWorker()
    if (!stream) initStream()
    if (!videoDOM) {
      const v = document.createElement('video')
      v.autoplay = true
      setVideoDOM(v)
    }

    if (worker && stream && videoDOM) {
      videoDOM.srcObject = stream
      setReady(true)
      const clearDraw = drawCanvas()
      const clear = onRecognizeText()
      return () => {
        clear()
        clearDraw()
        videoDOM.pause()
      }
    }
    return () => {
      '...'
    }
  }, [
    worker,
    stream,
    initStream,
    initWorker,
    onRecognizeText,
    setVideoDOM,
    drawCanvas,
    setReady,
    videoDOM,
  ])

  return (
    <>
      {ready || (
        <div className={styles.Loading}>
          <Loading />
        </div>
      )}
      <div className={styles.OCR}>
        <canvas ref={canvasRef} />
      </div>
    </>
  )
}

export default OCR
