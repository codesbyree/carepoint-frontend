import { useLanguageStore } from "@/stores/use-language.store"
import {
  SectionHeader,
  SectionHeaderHeading,
  SectionHeaderLabel,
} from "./section-header"
import { SectionSafeWrapper } from "./section-safe-wrapper"
import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Minus, Plus } from "@hugeicons/core-free-icons"

const content = {
  id: {
    label: "Pertanyaan yang sering diajukan",
    heading: "Hal-hal yang sering ditanyakan mahasiswa",
    question: [
      {
        question: "Apakah hasil skrining saya merupakan diagnosis medis?",
        answer:
          "Tidak — dan ini adalah hal paling penting untuk dipahami tentang platform ini. Hasil skrining bukanlah sebuah diagnosis. Ini memberikan indikasi apakah gejala tertentu ada, dan seberapa sering Anda mengalaminya. Hanya psikolog atau psikiater berlisensi — melalui penilaian klinis yang tepat — yang dapat mendiagnosis kondisi kesehatan mental. Jika hasil Anda menunjukkan adanya peningkatan gejala, kami menyarankan Anda untuk menjadwalkan janji temu dengan salah satu psikolog kampus kami.",
      },
      {
        question: "Apa arti skor tinggi pada GAD-7?",
        answer:
          "Skor GAD-7 yang lebih tinggi menunjukkan bahwa Anda mungkin mengalami gejala terkait kecemasan dengan frekuensi yang lebih sering atau intensitas yang lebih tinggi. Ini tidak berarti Anda mengalami Gangguan Kecemasan Menyeluruh (Generalized Anxiety Disorder). Skor dikelompokkan ke dalam tingkatan (minimal, ringan, sedang, berat) untuk membantu Anda memahami tingkat gejala Anda — namun ini adalah titik acuan, bukan sebuah kesimpulan. Profesional yang berkualifikasi adalah satu-satunya pihak yang dapat menginterpretasikan arti sebenarnya dari skor tersebut bagi Anda secara individu.",
      },
      {
        question:
          "Mengapa menggunakan alat skrining jika tidak bisa mendiagnosis saya?",
        answer:
          "Alat skrining sangat berharga karena membantu Anda menuangkan hal-hal yang mungkin Anda rasakan secara samar atau sulit diungkapkan ke dalam kata-kata dan angka. Banyak mahasiswa tidak mencari bantuan profesional karena mereka tidak yakin apakah apa yang mereka alami cukup serius. Skrining membantu menjembatani celah tersebut — memberikan Anda titik awal yang konkret dan dapat memberikan keyakinan untuk mengambil langkah berikutnya jika diperlukan.",
      },
      {
        question:
          "Apakah hasil saya akan dibagikan kepada dosen atau fakultas?",
        answer:
          "Sama sekali tidak. Hasil skrining Anda sepenuhnya bersifat rahasia. Hasil tersebut tidak akan pernah dibagikan kepada fakultas, dosen pembimbing akademik, atau pihak lain mana pun tanpa persetujuan tertulis yang eksplisit dari Anda. Satu-satunya pihak yang dapat melihat hasil Anda — dan hanya jika Anda mengizinkannya — adalah psikolog yang sesi pertemuan/konsultasinya Anda pesan.",
      },
      {
        question: "Dapatkah saya melakukan lebih dari satu skrining?",
        answer:
          "Ya. Anda diperbolehkan untuk melakukan beberapa skrining dengan topik yang berbeda — seperti kecemasan, stres, tidur, dan sebagainya. Setiap skrining mencakup dimensi kesejahteraan (wellbeing) yang berbeda, sehingga secara kolektif dapat memberikan gambaran yang lebih lengkap. Anda juga dapat melakukan skrining ulang dari waktu ke waktu untuk melihat bagaimana respons Anda berubah.",
      },
      {
        question:
          "Apa yang harus saya lakukan jika hasil saya mengkhawatirkan?",
        answer:
          "Pertama, jangan panik — hasil skrining bukanlah sebuah vonis akhir. Jika hasil Anda menunjukkan bahwa Anda mungkin memerlukan dukungan profesional, langkah paling membantu yang dapat Anda lakukan adalah memesan sesi pertemuan dengan salah satu psikolog kampus kami. Mereka hadir untuk mendengarkan, bukan untuk menghakimi. Anda dapat memesan sesi secara langsung melalui platform ini setelah masuk (login).",
      },
    ],
  },
  en: {
    label: "Frequently asked questions",
    heading: "Things students often ask",
    question: [
      {
        question: "Is my screening result a medical diagnosis?",
        answer:
          "No — and this is the most important thing to understand about this platform. A screening result is not a diagnosis. It gives you an indication of whether certain symptoms are present, and how often you may be experiencing them. Only a licensed psychologist or psychiatrist — through a proper clinical assessment — can diagnose a mental health condition. If your results suggest elevated symptoms, we encourage you to book an appointment with one of our campus psychologists.",
      },
      {
        question: "What does a high score on the GAD-7 mean?",
        answer:
          "A higher GAD-7 score suggests that you may be experiencing anxiety-related symptoms more frequently or more intensely. It does not mean you have Generalized Anxiety Disorder. Scores are grouped into ranges (minimal, mild, moderate, severe) to help you understand the level of your symptoms — but these are reference points, not conclusions. A qualified professional is the only one who can interpret what your score truly means for you as an individual.",
      },
      {
        question: "Why use a screening tool if it can't diagnose me?",
        answer:
          "Screening tools are valuable because they help you put words and numbers to things you might be feeling vaguely or struggling to articulate. Many students don't seek professional help because they're unsure whether what they're experiencing is serious enough. A screening helps bridge that gap — it gives you a concrete starting point and can give you the confidence to take the next step if needed.",
      },
      {
        question: "Will my results be shared with my lecturers or faculty?",
        answer:
          "Absolutely not. Your screening results are completely confidential. They will never be shared with your faculty, academic supervisors, or any other party without your explicit written consent. The only people who may see your results — and only if you choose — are the psychologists you book a session with.",
      },
      {
        question: "Can I take more than one screening?",
        answer:
          "Yes. You're welcome to take multiple screenings across different topics — anxiety, stress, sleep, and so on. Each one covers a different dimension of wellbeing, so together they can give you a fuller picture. You can also retake a screening over time to see how your responses change.",
      },
      {
        question: "What should I do if my results concern me?",
        answer:
          "First, don't panic — a screening result is not a verdict. If your results suggest you might benefit from professional support, the most helpful thing you can do is book a session with one of our campus psychologists. They're here to listen, not to judge. You can book directly through this platform after logging in.",
      },
    ],
  },
}

export function FAQSection() {
  const language = useLanguageStore((s) => s.language)
  const t = content[language]

  return (
    <section id="faq" className="bg-[#F1ECE6]">
      <SectionSafeWrapper className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-17">
        <div className="flex w-full flex-col gap-12">
          <SectionHeader className="items-start">
            <SectionHeaderLabel>{t.label}</SectionHeaderLabel>
            <SectionHeaderHeading className="mb-0">
              {t.heading}
            </SectionHeaderHeading>
          </SectionHeader>
        </div>

        <ol className="flex flex-col gap-1.5">
          {t.question.map((q, index) => (
            <ExpandingCard
              key={index}
              question={q.question}
              answer={q.answer}
            />
          ))}
        </ol>
      </SectionSafeWrapper>
    </section>
  )
}

type ExpandingCardProps = {
  question: string
  answer: string
}

function ExpandingCard(props: ExpandingCardProps) {
  const [expanded, setExpanded] = useState(false)

  const toggle = () => {
    setExpanded(!expanded)
  }

  return (
    <article className="flex flex-col gap-4 rounded-md border border-border bg-card p-4">
      <div
        role="button"
        className="flex items-start justify-between gap-8 text-teal-900"
        onClick={toggle}
      >
        <h4 className="font-semibold">{props.question}</h4>
        {expanded ? (
          <HugeiconsIcon icon={Minus} className="w-4 shrink-0" />
        ) : (
          <HugeiconsIcon icon={Plus} className="w-4 shrink-0" />
        )}
      </div>

      {expanded && <p className="text-olive-600">{props.answer}</p>}
    </article>
  )
}
