import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions in points
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const fontBoldItalic = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

  const leftMargin = 38;
  const rightMargin = 38;
  const contentWidth = width - leftMargin - rightMargin;
  let y = height - 38;

  const colorBlack = rgb(0.1, 0.1, 0.1);
  const colorDark = rgb(0.15, 0.15, 0.15);
  const colorGray = rgb(0.35, 0.35, 0.35);
  const colorBlue = rgb(0.08, 0.38, 0.74);
  const colorLine = rgb(0.75, 0.75, 0.75);

  // Helper for drawing text
  const drawText = (text, x, yPos, font, size, color = colorDark) => {
    page.drawText(text, {
      x,
      y: yPos,
      font,
      size,
      color,
    });
  };

  // Helper for line wrapping
  const wrapText = (text, maxWidth, font, size) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  };

  // Header: Name
  drawText('SURBHI', leftMargin, y, fontBold, 18, colorBlack);
  y -= 14;

  // Contact Info Row 1
  drawText('LinkedIn: ', leftMargin, y, fontBold, 8.5, colorBlack);
  const linkedinLabelWidth = fontBold.widthOfTextAtSize('LinkedIn: ', 8.5);
  drawText('www.linkedin.com/in/surbhi-g001', leftMargin + linkedinLabelWidth, y, fontRegular, 8.5, colorBlue);

  const emailText = 'Email: gangwarsurbhi57@gmail.com';
  const emailWidth = fontRegular.widthOfTextAtSize(emailText, 8.5);
  drawText('Email: ', width - rightMargin - emailWidth, y, fontBold, 8.5, colorBlack);
  const emailLabelWidth = fontBold.widthOfTextAtSize('Email: ', 8.5);
  drawText('gangwarsurbhi57@gmail.com', width - rightMargin - emailWidth + emailLabelWidth, y, fontRegular, 8.5, colorBlue);
  y -= 11;

  // Contact Info Row 2
  drawText('GitHub: ', leftMargin, y, fontBold, 8.5, colorBlack);
  const githubLabelWidth = fontBold.widthOfTextAtSize('GitHub: ', 8.5);
  drawText('https://github.com/SurbhiX1', leftMargin + githubLabelWidth, y, fontRegular, 8.5, colorBlue);

  const phoneText = 'Mobile: 8279893282';
  const phoneWidth = fontRegular.widthOfTextAtSize(phoneText, 8.5);
  drawText('Mobile: ', width - rightMargin - phoneWidth, y, fontBold, 8.5, colorBlack);
  const phoneLabelWidth = fontBold.widthOfTextAtSize('Mobile: ', 8.5);
  drawText('8279893282', width - rightMargin - phoneWidth + phoneLabelWidth, y, fontRegular, 8.5, colorBlack);
  y -= 8;

  const drawSectionHeader = (title) => {
    y -= 4;
    drawText(title, leftMargin, y, fontBold, 10, colorBlack);
    y -= 3;
    page.drawLine({
      start: { x: leftMargin, y: y },
      end: { x: width - rightMargin, y: y },
      thickness: 0.75,
      color: colorLine,
    });
    y -= 8;
  };

  // 1. SKILLS
  drawSectionHeader('SKILLS');

  const skillsItems = [
    { label: '• Languages: ', content: 'C, Java, Python, JavaScript, C++ (Basics)' },
    { label: '• Core CS: ', content: 'Data Structures & Algorithms (Java)' },
    { label: '• Frameworks: ', content: 'HTML and CSS' },
    { label: '• Tools/Platforms: ', content: 'MySQL, Git and Github, Canva, Figma, VS Code, LeetCode, HackerRank' },
    { label: '• Soft Skills: ', content: 'Problem-Solving, Team Collaboration, Project Management, Adaptability, Communication, Time Management, Presentation Skills' },
  ];

  for (const item of skillsItems) {
    const labelW = fontBold.widthOfTextAtSize(item.label, 8.5);
    drawText(item.label, leftMargin, y, fontBold, 8.5, colorBlack);
    const wrapped = wrapText(item.content, contentWidth - labelW, fontRegular, 8.5);
    for (let i = 0; i < wrapped.length; i++) {
      if (i === 0) {
        drawText(wrapped[i], leftMargin + labelW, y, fontRegular, 8.5, colorDark);
      } else {
        y -= 10;
        drawText(wrapped[i], leftMargin + 10, y, fontRegular, 8.5, colorDark);
      }
    }
    y -= 10;
  }

  // 2. INTERNSHIP
  drawSectionHeader('INTERNSHIP');
  drawText('None yet – actively developing skills and participating in technical projects & competitions to build industry experience.', leftMargin, y, fontItalic, 8.5, colorGray);
  y -= 9;

  // 3. EXPERIENCE
  drawSectionHeader('EXPERIENCE');

  // Experience 1
  drawText('• Member (Student Academic Advisory Committee)', leftMargin, y, fontBold, 9, colorBlack);
  y -= 10;
  drawText('  Lovely Professional University', leftMargin, y, fontBold, 8.5, colorBlack);
  const dur1 = 'Duration: Mar, 2026 – Present';
  const dur1W = fontBold.widthOfTextAtSize(dur1, 8.5);
  drawText(dur1, width - rightMargin - dur1W, y, fontBold, 8.5, colorBlack);
  y -= 9.5;

  const exp1Bullets = [
    'Represent students in discussions related to academic policies and improvements curriculum.',
    'Collaborate with faculty and administration to enhance student learning experience.',
    'Provide structured feedback on academic initiatives.',
  ];
  for (const b of exp1Bullets) {
    drawText(`  ${b}`, leftMargin, y, fontRegular, 8, colorDark);
    y -= 9.5;
  }
  y -= 2;

  // Experience 2
  drawText('• LPU Student Ambassador (Times Foundation)', leftMargin, y, fontBold, 9, colorBlack);
  y -= 10;
  drawText('  Government Schools of Uttar Pradesh', leftMargin, y, fontBold, 8.5, colorBlack);
  const dur2 = 'Duration: July, 2026 – July, 2026';
  const dur2W = fontBold.widthOfTextAtSize(dur2, 8.5);
  drawText(dur2, width - rightMargin - dur2W, y, fontBold, 8.5, colorBlack);
  y -= 9.5;

  const exp2Bullets = [
    'Conducted environmental and critical-thinking sessions; promoted TCTC quiz participation.',
    'Used communication, presentation, student engagement, data management, and documentation skills.',
    'Gained experience in community engagement, teamwork, and field-based campaign execution.',
  ];
  for (const b of exp2Bullets) {
    drawText(`  ${b}`, leftMargin, y, fontRegular, 8, colorDark);
    y -= 9.5;
  }
  y -= 2;

  // Experience 3
  drawText('• Coordinator (Play 2 Unite Organization)', leftMargin, y, fontBold, 9, colorBlack);
  y -= 10;
  drawText('  Lovely Professional University', leftMargin, y, fontBold, 8.5, colorBlack);
  const dur3 = 'Duration: Aug, 2025 – Feb, 2026';
  const dur3W = fontBold.widthOfTextAtSize(dur3, 8.5);
  drawText(dur3, width - rightMargin - dur3W, y, fontBold, 8.5, colorBlack);
  y -= 9.5;

  const exp3Bullets = [
    'Maintained the Data Record of the organization.',
    'Worked with peers to plan and deliver a diverse range of student-focused events, including workshops, hackathons, cultural nights, sports tournaments, e-sports competitions, and movie screenings.',
    'Collaborated with team members to understand student interests and design events that enrich campus life.',
  ];
  for (const b of exp3Bullets) {
    const wrapped = wrapText(`  ${b}`, contentWidth, fontRegular, 8);
    for (const l of wrapped) {
      drawText(l, leftMargin, y, fontRegular, 8, colorDark);
      y -= 9.5;
    }
  }

  // 4. PROJECTS
  drawSectionHeader('PROJECTS');

  // Project 1
  drawText('• Forest Surveillance and Fire Prediction & Detection System (IoT + Web Dashboard)', leftMargin, y, fontBold, 8.5, colorBlack);
  y -= 9.5;
  const p1Desc = 'Developed a real-time forest surveillance system using ESP32 and sensors to detect temperature, humidity, smoke, gas and flame levels. Built a dashboard to visualize live data using gauges and charts and stored readings using MySQL.';
  const p1Wrapped = wrapText(`  ${p1Desc}`, contentWidth, fontRegular, 8);
  for (const l of p1Wrapped) {
    drawText(l, leftMargin, y, fontRegular, 8, colorDark);
    y -= 9.5;
  }
  drawText('  Tech: ', leftMargin, y, fontBold, 8, colorBlack);
  const p1TechW = fontBold.widthOfTextAtSize('  Tech: ', 8);
  drawText('ESP32, Sensors, LoRa, HTML, CSS, JavaScript, MySQL', leftMargin + p1TechW, y, fontRegular, 8, colorDark);
  y -= 11;

  // Project 2
  drawText('• Movie Recommendation System', leftMargin, y, fontBold, 8.5, colorBlack);
  y -= 9.5;
  const p2Desc = 'Built a movie suggestion program in Python that reads movie information from a CSV file and recommends movies based on user-selected filters using functions and file handling.';
  const p2Wrapped = wrapText(`  ${p2Desc}`, contentWidth, fontRegular, 8);
  for (const l of p2Wrapped) {
    drawText(l, leftMargin, y, fontRegular, 8, colorDark);
    y -= 9.5;
  }
  drawText('  Tech: ', leftMargin, y, fontBold, 8, colorBlack);
  const p2TechW = fontBold.widthOfTextAtSize('  Tech: ', 8);
  drawText('Python (Functions, CSV File Handling, Conditional Logic)', leftMargin + p2TechW, y, fontRegular, 8, colorDark);
  y -= 10;

  // 5. CERTIFICATES
  drawSectionHeader('CERTIFICATES');
  const certBullets = [
    '• Infosys Springboard –Python Fundamentals, Introduction to Artificial Intelligence, Data Science, Big Data, C Programming',
    '• Tutorialspoint –From Syntax to System: Elevate with Python',
    '• OpenLearn –Collective Leadership',
  ];
  for (const c of certBullets) {
    const wrapped = wrapText(c, contentWidth, fontRegular, 8);
    for (const l of wrapped) {
      drawText(l, leftMargin, y, fontRegular, 8, colorDark);
      y -= 9.5;
    }
  }

  // 6. ACHIEVEMENTS
  drawSectionHeader('ACHIEVEMENTS');

  // Achievement 1
  drawText('• Runner-up in HackManthon Hackathon:', leftMargin, y, fontBold, 8.5, colorBlack);
  y -= 9.5;
  const ach1 = '  Secured second position among competing university teams for developing an innovative tech solution under time-bound challenge.';
  const ach1W = wrapText(ach1, contentWidth, fontRegular, 8);
  for (const l of ach1W) {
    drawText(l, leftMargin, y, fontRegular, 8, colorDark);
    y -= 9.5;
  }

  // Achievement 2
  drawText('• Nominated for SIH Grand Finale (Smart India Hackathon):', leftMargin, y, fontBold, 8.5, colorBlack);
  y -= 9.5;
  const ach2 = '  Recognized for technical problem-solving and teamwork and shortlisted to represent university at National Level.';
  const ach2W = wrapText(ach2, contentWidth, fontRegular, 8);
  for (const l of ach2W) {
    drawText(l, leftMargin, y, fontRegular, 8, colorDark);
    y -= 9.5;
  }

  // Achievement 3
  drawText('• Winner of University Inter – School Basketball Championship:', leftMargin, y, fontBold, 8.5, colorBlack);
  y -= 9.5;
  const ach3 = '  Demonstrated leadership, strategy, and collaboration as part of SCSE Basketball Team.';
  const ach3W = wrapText(ach3, contentWidth, fontRegular, 8);
  for (const l of ach3W) {
    drawText(l, leftMargin, y, fontRegular, 8, colorDark);
    y -= 9.5;
  }

  // 7. EDUCATION
  drawSectionHeader('EDUCATION');
  drawText('• Lovely Professional University', leftMargin, y, fontBold, 8.5, colorBlack);
  const loc = 'Punjab, India';
  const locW = fontBold.widthOfTextAtSize(loc, 8.5);
  drawText(loc, width - rightMargin - locW, y, fontBold, 8.5, colorBlack);
  y -= 9.5;

  drawText('  Bachelor of Technology - Computer Science and Engineering; CGPA: 9.49', leftMargin, y, fontItalic, 8, colorDark);
  const since = 'Since August, 2025';
  const sinceW = fontItalic.widthOfTextAtSize(since, 8);
  drawText(since, width - rightMargin - sinceW, y, fontItalic, 8, colorDark);

  // Save to destination
  const targetDir = path.resolve('public/assets');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(targetDir, 'Surbhi-CV.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Successfully generated CV at ${filePath} (${pdfBytes.length} bytes)`);
}

generateCV().catch(err => {
  console.error('Error generating CV:', err);
  process.exit(1);
});
