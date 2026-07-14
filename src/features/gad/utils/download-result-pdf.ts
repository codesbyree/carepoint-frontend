import jsPDF from "jspdf"
import html2canvas from "html2canvas-pro"

export async function downloadResultPdf(
  node: HTMLElement,
  filename = "gad7-result.pdf"
) {
  const canvas = await html2canvas(node, {
    scale: 2, // sharper text in the exported PDF
    backgroundColor: "#FFFFFF",
    useCORS: true,
  })

  const imgData = canvas.toDataURL("image/png")
  const pdf = new jsPDF({ unit: "mm", format: "a4" })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const imgWidth = pageWidth
  const imgHeight = (canvas.height * imgWidth) / canvas.width

  if (imgHeight <= pageHeight) {
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
  } else {
    let renderedHeight = 0
    const pageCanvas = document.createElement("canvas")
    const pageCtx = pageCanvas.getContext("2d")!
    const pxPerMm = canvas.width / imgWidth
    const pageHeightPx = pageHeight * pxPerMm

    pageCanvas.width = canvas.width

    while (renderedHeight < canvas.height) {
      const sliceHeight = Math.min(pageHeightPx, canvas.height - renderedHeight)
      pageCanvas.height = sliceHeight
      pageCtx.clearRect(0, 0, pageCanvas.width, sliceHeight)
      pageCtx.drawImage(
        canvas,
        0,
        renderedHeight,
        canvas.width,
        sliceHeight,
        0,
        0,
        canvas.width,
        sliceHeight
      )
      const sliceData = pageCanvas.toDataURL("image/png")
      const sliceHeightMm = sliceHeight / pxPerMm

      if (renderedHeight > 0) pdf.addPage()
      pdf.addImage(sliceData, "PNG", 0, 0, imgWidth, sliceHeightMm)

      renderedHeight += sliceHeight
    }
  }

  pdf.save(filename)
}
