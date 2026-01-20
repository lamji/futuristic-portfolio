import jsPDF from 'jspdf';

export const generatePdfBuffer = async () => {
  try {
    // Generate PDF as buffer for email attachment
    const doc = new jsPDF();
    
    // Get the resume element
    const resumeElement = document.getElementById('resume');
    if (!resumeElement) {
      throw new Error('Resume content not found');
    }

    // Use html2canvas to convert the resume element to image
    const html2canvas = (await import('html2canvas')).default;
    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Return as buffer
    const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
    return pdfBuffer;
  } catch (error) {
    console.error('Error generating PDF buffer:', error);
    throw error;
  }
};
