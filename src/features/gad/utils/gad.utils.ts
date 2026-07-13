export const getSeverityDetails = (score: number) => {
  if (score <= 4) {
    return {
      labelEn: "Minimal anxiety",
      labelId: "Kecemasan minimal",
      bgClass: "bg-green-50 border-green-400",
      textClass: "text-green-900",
      subTextClass: "text-green-900/60",
      mainTextEn:
        "Your responses suggest minimal anxiety symptoms. It is normal to experience some anxiety from time to time, and your current level does not typically require clinical intervention.",
      mainTextId:
        "Jawaban Anda menunjukkan gejala kecemasan minimal. Merasa cemas sesekali adalah hal yang wajar, dan tingkat gejala Anda saat ini umumnya tidak memerlukan intervensi klinis.",
      subTextEn: "Keep practicing your usual healthy coping habits.",
      subTextId:
        "Tetap pertahankan kebiasaan manajemen stres yang sehat seperti biasa.",
    }
  }
  if (score <= 9) {
    return {
      labelEn: "Mild anxiety",
      labelId: "Kecemasan ringan",
      bgClass: "bg-blue-50 border-blue-400",
      textClass: "text-blue-900",
      subTextClass: "text-blue-900/60",
      mainTextEn:
        "Your responses suggest mild anxiety symptoms. While you may be experiencing some distress, it might not be severely impacting your daily functioning yet.",
      mainTextId:
        "Jawaban Anda menunjukkan gejala kecemasan ringan. Meskipun Anda mungkin merasakan sedikit ketidaknyamanan, hal ini mungkin belum memengaruhi aktivitas sehari-hari Anda secara signifikan.",
      subTextEn:
        "Monitoring your symptoms and utilizing self-guided stress management techniques can be beneficial.",
      subTextId:
        "Memantau gejala Anda dan menerapkan teknik manajemen stres mandiri dapat bermanfaat.",
    }
  }
  if (score <= 14) {
    return {
      labelEn: "Moderate anxiety",
      labelId: "Kecemasan sedang",
      bgClass: "bg-yellow-50 border-yellow-400",
      textClass: "text-yellow-900",
      subTextClass: "text-yellow-900/60",
      mainTextEn:
        "Your responses suggest moderate anxiety symptoms. At this level, anxiety may be noticeably affecting your daily functioning, concentration, or sleep. A clinical evaluation is recommended.",
      mainTextId:
        "Jawaban Anda menunjukkan gejala kecemasan tingkat sedang. Pada tingkat ini, kecemasan mungkin mulai memengaruhi fungsi harian, konsentrasi, atau pola tidur Anda. Evaluasi klinis sangat disarankan.",
      subTextEn:
        "Moderate symptoms are highly treatable, and speaking with a professional can help you explore support options.",
      subTextId:
        "Gejala tingkat sedang sangat dapat diatasi, dan berkonsultasi dengan tenaga profesional dapat membantu Anda menemukan dukungan yang tepat.",
    }
  }
  return {
    labelEn: "Severe anxiety",
    labelId: "Kecemasan berat",
    bgClass: "bg-red-50 border-red-400",
    textClass: "text-red-900",
    subTextClass: "text-red-900/60",
    mainTextEn:
      "Your responses suggest severe anxiety symptoms. Symptoms at this level often significantly interfere with daily life, relationships, and overall well-being. We strongly encourage you to seek a professional assessment.",
    mainTextId:
      "Jawaban Anda menunjukkan gejala kecemasan berat. Gejala pada tingkat ini sering kali mengganggu kehidupan sehari-hari, hubungan, dan kesejahteraan secara signifikan. Kami sangat menyarankan Anda untuk mencari penilaian profesional.",
    subTextEn:
      "Please reach out to a healthcare provider or mental health professional for proper diagnosis and treatment.",
    subTextId:
      "Silakan hubungi penyedia layanan kesehatan atau profesional kesehatan mental untuk diagnosis dan penanganan yang tepat.",
  }
}
