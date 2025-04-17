"use client"

// Translation dictionaries
const dictionaries = {
  en: {
    "header.title": "Web Apps",
    "header.subtitle": "A collection of free, privacy-focused web applications that run directly in your browser.",
    "categories.All": "All",
    "categories.ImageProcessing": "Image Processing",
    "categories.Productivity": "Productivity",
    "categories.VideoProcessing": "Video Processing",
    "categories.AI": "AI",
    "buttons.video": "Video",
    "buttons.source": "Source",
    "buttons.tryIt": "Try it",
    "footer.text": "All apps are open source and process data locally in your browser.",

    // Background Remover
    "backgroundRemover.title": "Background Image Remover",
    "backgroundRemover.description":
      "Free background-image remover in the browser using AI. Privacy-friendly, powered by Transformers.js.",
    "backgroundRemover.feature1": "One-click background removal",
    "backgroundRemover.feature2": "Custom backgrounds",
    "backgroundRemover.feature3": "Local processing",

    // Squish
    "squish.title": "Squish - Image Optimizer",
    "squish.description": "Batch compress images for free in the browser. Supports AVIF, WebP, JPEG, and more.",
    "squish.feature1": "Multiple format support",
    "squish.feature2": "Batch processing",
    "squish.feature3": "Real-time preview",

    // Say
    "say.title": "Say - Voice Dictation",
    "say.description": "Free, accurate voice transcription using Whisper AI directly in your browser.",
    "say.feature1": "Voice-to-text",
    "say.feature2": "Text summaries",
    "say.feature3": "Note management",

    // Compress
    "compress.title": "Compress - Video Optimizer",
    "compress.description": "Browser-based video converter using FFMPEG.wasm. Convert videos without uploading.",
    "compress.feature1": "Multiple compression methods",
    "compress.feature2": "Codec selection",
    "compress.feature3": "Bitrate control",

    // Scan
    "scan.title": "Scan - Document Scanner",
    "scan.description": "Web-based document scanner. Capture, process, and convert to PDF.",
    "scan.feature1": "Camera capture",
    "scan.feature2": "Smart cropping",
    "scan.feature3": "Multi-page support",

    // Filter
    "filter.title": "Filter - Image Editor",
    "filter.description":
      "Filter is a powerful, web-based image editor. It provides a modern, intuitive interface for quick image edits and filters, optimized for both desktop and mobile devices.",
    "filter.feature1": "Image editing",
    "filter.feature2": "Filter effects",
    "filter.feature3": "Responsive design",

    // Chatty
    "chatty.title": "Chatty - AI Chat",
    "chatty.description":
      "Chatty is your private AI that leverages WebGPU to run large language models (LLMs) natively & privately in your browser, bringing you the most feature rich in-browser AI experience.",
    "chatty.feature1": "WebGPU-powered LLMs",
    "chatty.feature2": "Private in-browser processing",
    "chatty.feature3": "Feature-rich AI chat",

    // Upscale
    "upscale.title": "Upscale and Fix Images",
    "upscale.description":
      "Enhance is an AI-powered image enhancement tool that lets you upscale and improve image quality directly in your browser.",
    "upscale.feature1": "Multiple upscaling models (2x-8x)",
    "upscale.feature2": "Advanced image enhancements",
    "upscale.feature3": "WebGL-aware processing",

    // Record
    "record.title": "Record",
    "record.description":
      "A privacy-friendly screen and camera recorder that works directly in your browser with no downloads required. Record from a tab, window or full screen with picture-in-picture camera views.",
    "record.feature1": "Screen & Camera Recording",
    "record.feature2": "Picture-in-Picture View",
    "record.feature3": "Built-in Teleprompter",
  },
  zh: {
    "header.title": "网络应用",
    "header.subtitle": "一系列免费、注重隐私的网络应用程序，直接在您的浏览器中运行。",
    "categories.All": "全部",
    "categories.ImageProcessing": "图像处理",
    "categories.Productivity": "生产力工具",
    "categories.VideoProcessing": "视频处理",
    "categories.AI": "人工智能",
    "buttons.video": "视频",
    "buttons.source": "源代码",
    "buttons.tryIt": "立即尝试",
    "footer.text": "所有应用都是开源的，并在您的浏览器中本地处理数据。",

    // Background Remover
    "backgroundRemover.title": "背景图像移除器",
    "backgroundRemover.description": "在浏览器中使用AI免费移除背景图像。注重隐私，由Transformers.js提供支持。",
    "backgroundRemover.feature1": "一键背景移除",
    "backgroundRemover.feature2": "自定义背景",
    "backgroundRemover.feature3": "本地处理",

    // Squish
    "squish.title": "Squish - 图像优化器",
    "squish.description": "在浏览器中批量压缩图像。支持AVIF、WebP、JPEG等多种格式。",
    "squish.feature1": "多格式支持",
    "squish.feature2": "批量处理",
    "squish.feature3": "实时预览",

    // Say
    "say.title": "Say - 语音听写",
    "say.description": "使用Whisper AI在浏览器中进行免费、准确的语音转录。",
    "say.feature1": "语音转文字",
    "say.feature2": "文本摘要",
    "say.feature3": "笔记管理",

    // Compress
    "compress.title": "Compress - 视频优化器",
    "compress.description": "基于浏览器的视频转换器，使用FFMPEG.wasm。无需上传即可转换视频。",
    "compress.feature1": "多种压缩方法",
    "compress.feature2": "编解码器选择",
    "compress.feature3": "比特率控制",

    // Scan
    "scan.title": "Scan - 文档扫描仪",
    "scan.description": "基于网络的文档扫描仪。捕获、处理并转换为PDF。",
    "scan.feature1": "相机捕获",
    "scan.feature2": "智能裁剪",
    "scan.feature3": "多页面支持",

    // Filter
    "filter.title": "Filter - 图像编辑器",
    "filter.description":
      "Filter是一个功能强大的基于网络的图像编辑器。它提供了现代、直观的界面，用于快速图像编辑和滤镜，针对桌面和移动设备进行了优化。",
    "filter.feature1": "图像编辑",
    "filter.feature2": "滤镜效果",
    "filter.feature3": "响应式设计",

    // Chatty
    "chatty.title": "Chatty - AI聊天",
    "chatty.description":
      "Chatty是您的私人AI，利用WebGPU在浏览器中本地运行大型语言模型（LLMs），为您带来功能最丰富的浏览器内AI体验。",
    "chatty.feature1": "WebGPU驱动的LLMs",
    "chatty.feature2": "浏览器内私密处理",
    "chatty.feature3": "功能丰富的AI聊天",

    // Upscale
    "upscale.title": "图像放大与修复",
    "upscale.description": "Enhance是一个AI驱动的图像增强工具，让您可以在浏览器中直接放大和改善图像质量。",
    "upscale.feature1": "多种放大模型（2x-8x）",
    "upscale.feature2": "高级图像增强",
    "upscale.feature3": "WebGL感知处理",

    // Record
    "record.title": "录制",
    "record.description":
      "一个注重隐私的屏幕和摄像头录制器，直接在您的浏览器中工作，无需下载。可以从标签页、窗口或全屏录制，支持画中画摄像头视图。",
    "record.feature1": "屏幕和摄像头录制",
    "record.feature2": "画中画视图",
    "record.feature3": "内置提词器",
  },
}

// Helper function to use translations
export function useTranslations(locale: string) {
  // Default to English if the locale is not supported
  const dictionary = dictionaries[locale as keyof typeof dictionaries] || dictionaries.en

  return function translate(key: string): string {
    return dictionary[key as keyof typeof dictionary] || key
  }
}
