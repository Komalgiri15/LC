import React from 'react';
import { Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const flipIn = {
  initial: { opacity: 0, rotateX: -60, y: 20 },
  whileInView: { opacity: 1, rotateX: 0, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.2 }
};

export default function Spread1() {
  return (
    <motion.div 
      className="brochure-container"
      initial={{ y: '15vh', opacity: 0, rotateX: 15 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* COLUMN 1 (Left - Black) */}
      <motion.div 
        className="col col-black"
        initial={{ rotateY: 90, transformOrigin: 'right', filter: 'brightness(0.3)' }}
        animate={{ rotateY: 0, filter: 'brightness(1)' }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 10 }}
      >
        <motion.img 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1.5, delay: 1 }}
          src="/top-img.png" 
          alt="Health Abstract" 
          className="img-top-curve" 
        />
        
        <motion.div 
          className="col-black-content"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h1 variants={flipIn} className="title-main font-heading">FIND YOUR<br/>RHYTHM</motion.h1>
          <motion.p variants={flipIn} className="subtitle font-heading">LEVEL 1 CERTIFICATION</motion.p>
          
          <motion.p variants={flipIn} className="text-body">
            Level 1 Certification in Foundational Medicine with Luke Coutinho. 
            Join us in person to understand the foundations that shape human health.
          </motion.p>
          
          <motion.p variants={flipIn} className="text-body" style={{ marginTop: '20px' }}>
            <strong>Taj Lands End, Mumbai</strong><br />
            Saturday, September 26, 2026<br />
            9:00 AM IST onwards
          </motion.p>
          
          <motion.div variants={flipIn} className="contact-info">
            <p>Reserve your seat:</p>
            <p>ankita.nair@lukecoutinho.com</p>
            <p>+91 98218 51920</p>
            <p style={{ marginTop: '10px' }}>clive@lukecoutinho.com</p>
            <p>+91 90498 84135</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* COLUMN 2 (Middle - Light Grey) */}
      <motion.div 
        className="col"
        initial={{ filter: 'brightness(0.3)' }}
        animate={{ filter: 'brightness(1)' }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.svg 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="shape-blob" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#111111" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.4,-46.3C91,-33.5,97.3,-18,97.7,-2.3C98.1,13.4,92.5,29.3,82.8,42.5C73.1,55.7,59.3,66.2,44.4,73.1C29.5,80,13.5,83.3,-2.2,86.9C-17.9,90.5,-33.3,94.4,-47.1,89.5C-60.9,84.6,-73,70.9,-81.1,56C-89.2,41.1,-93.3,25,-94.1,9.4C-94.9,-6.2,-92.4,-21.3,-84.9,-33.6C-77.4,-45.9,-64.9,-55.4,-51.7,-63.1C-38.5,-70.8,-24.6,-76.7,-10,-79.1C4.6,-81.5,19.2,-80.4,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100) scale(1.5)" />
        </motion.svg>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          style={{ marginTop: '60px', zIndex: 2, position: 'relative' }} 
          className="text-center"
        >
          <motion.h2 variants={flipIn} className="title-dark font-heading">A NOTE</motion.h2>
          <motion.p variants={flipIn} className="subtitle-dark font-heading">FROM LUKE</motion.p>
          
          <motion.p variants={flipIn} className="text-body" style={{ marginTop: '40px', padding: '0 20px 0 40px', textAlign: 'left', position: 'relative', zIndex: 10 }}>
            For more than 15 years, one question stayed with me. Why do we continue treating the body in parts when it has always functioned as one whole?
          </motion.p>
          
          <motion.p variants={flipIn} className="text-body" style={{ padding: '0 20px 0 40px', textAlign: 'left', position: 'relative', zIndex: 10 }}>
            Medicine, nutrition, movement, psychology, and research have each advanced remarkably. Yet too often they are practiced in isolation. The person in the middle is left trying to connect what the system has separated.
          </motion.p>
          
          <motion.p variants={flipIn} className="text-body" style={{ padding: '0 20px 0 40px', textAlign: 'left', position: 'relative', zIndex: 10 }}>
            That observation changed the way my team and I worked. Every client. Every clinical discussion. We began looking for what existed beneath every diagnosis, every symptom, and every protocol.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="circle-quote"
        >
          <span className="quote-mark">“</span>
          <p className="font-heading" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>FOUNDATIONS.</p>
          <p>Because when the foundations improve, everything built upon them improves too.</p>
        </motion.div>
      </motion.div>

      {/* COLUMN 3 (Right - Light Grey) */}
      <motion.div 
        className="col col-right"
        initial={{ rotateY: -90, transformOrigin: 'left', filter: 'brightness(0.3)' }}
        animate={{ rotateY: 0, filter: 'brightness(1)' }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 10 }}
      >
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          style={{ width: '100%' }}
        >
          <motion.div variants={flipIn} className="icon-circle">
            <Activity size={32} />
          </motion.div>
          
          <motion.h1 variants={flipIn} className="title-huge font-heading" style={{ fontSize: '2.5rem' }}>FOUNDATIONAL</motion.h1>
          <motion.p variants={flipIn} className="subtitle-huge font-heading">MEDICINE</motion.p>
          
          <motion.div variants={flipIn} className="divider-line"></motion.div>
          
          <motion.p variants={flipIn} className="text-body" style={{ marginTop: '20px' }}>
            <strong>Why Now?</strong><br/><br/>
            Healthcare has never had more answers. Yet chronic disease continues to rise.
          </motion.p>
          <motion.p variants={flipIn} className="text-body">
            The future of health may not depend on discovering more. It may depend on connecting what we've already learned.
          </motion.p>
        </motion.div>
        
        <motion.img 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          src="/bottom-img.png" 
          alt="Rhythm Background" 
          className="img-bottom-slant" 
        />
      </motion.div>
    </motion.div>
  );
}
