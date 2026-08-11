import React from 'react';
import { Star } from 'lucide-react';
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

export default function Spread4() {
  return (
    <div className="brochure-container">
      {/* COLUMN 10 (Left - Page 10) */}
      <motion.div 
        className="col"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={flipIn} className="title-dark font-heading" style={{ fontSize: '1.8rem', marginBottom: '5px' }}>WHAT MAKES<br/>THIS DIFFERENT?</motion.h2>
        <motion.p variants={flipIn} className="subtitle-dark font-heading" style={{ fontSize: '0.8rem', marginBottom: '30px' }}>FROM INFORMATION TO INTEGRATION.</motion.p>
        
        <motion.div variants={staggerContainer} className="comparison-table" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          
          <motion.div variants={flipIn} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', borderBottom: '2px solid var(--black)', paddingBottom: '10px' }}>
            <p className="font-heading" style={{ fontSize: '0.75rem', color: 'var(--dark-grey)' }}>A Typical Seminar</p>
            <p className="font-heading" style={{ fontSize: '0.75rem', color: 'var(--black)', fontWeight: 800 }}>Find Your Rhythm</p>
          </motion.div>

          <motion.div variants={flipIn} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingBottom: '15px', borderBottom: '1px solid #ddd' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--dark-grey)' }}>You listen to six separate talks on six separate topics</p>
            <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>You trace one real case across all six foundations, live in the room</p>
          </motion.div>

          <motion.div variants={flipIn} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingBottom: '15px', borderBottom: '1px solid #ddd' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--dark-grey)' }}>Notes you file away for later</p>
            <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>A framework you use on your own health before you leave</p>
          </motion.div>

          <motion.div variants={flipIn} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingBottom: '15px', borderBottom: '1px solid #ddd' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--dark-grey)' }}>Q&A from the back of a large hall</p>
            <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>Open discussion. Diverse perspectives. Questions that challenge assumptions</p>
          </motion.div>

          <motion.div variants={flipIn} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingBottom: '15px', borderBottom: '1px solid #ddd' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--dark-grey)' }}>A certificate of attendance</p>
            <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>A Certificate of Participation and a shareable digital LinkedIn badge recognizing your completion of Level 1 Foundational Medicine</p>
          </motion.div>

          <motion.div variants={flipIn} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingBottom: '15px', borderBottom: '1px solid #ddd' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--dark-grey)' }}>The room empties, the learning ends</p>
            <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>Digital modules continue the conversation beyond the classroom</p>
          </motion.div>

          <motion.div variants={flipIn} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--dark-grey)' }}>Attend a programme</p>
            <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>Become part of the first Foundational Medicine online community</p>
          </motion.div>

        </motion.div>

        <motion.div variants={flipIn} style={{ marginTop: 'auto', backgroundColor: 'var(--grey)', border: '2px solid var(--black)', padding: '20px', textAlign: 'center' }}>
          <p className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
            The goal isn't to know more.<br/>It is to see differently.
          </p>
        </motion.div>
      </motion.div>

      {/* COLUMN 11 (Middle - Page 11 - Black) */}
      <motion.div 
        className="col col-black" 
        style={{ padding: '40px' }}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={flipIn} className="title-main font-heading" style={{ fontSize: '2rem', marginBottom: '5px' }}>EARN THE<br/>CERTIFICATE.</motion.h2>
        <motion.p variants={flipIn} className="title-main font-heading" style={{ fontSize: '1.5rem', color: 'var(--grey)' }}>KEEP THE FRAMEWORK.</motion.p>
        
        <motion.div variants={flipIn} className="divider-line" style={{ backgroundColor: 'var(--white)', opacity: 0.3, width: '100%', margin: '20px 0 30px 0' }}></motion.div>
        
        <motion.p variants={flipIn} className="font-heading" style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--grey)', marginBottom: '30px' }}>LEVEL 1 CERTIFICATION IN FOUNDATIONAL MEDICINE</motion.p>

        <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <motion.div variants={flipIn}>
            <h3 className="font-heading" style={{ fontSize: '1.1rem', color: 'var(--white)' }}>ASSESS</h3>
            <p className="text-body" style={{ marginTop: '5px', color: '#ccc', marginBottom: 0 }}>Demonstrate your understanding through the program assessment.</p>
          </motion.div>
          
          <motion.div variants={flipIn}>
            <h3 className="font-heading" style={{ fontSize: '1.1rem', color: 'var(--white)' }}>CERTIFY</h3>
            <p className="text-body" style={{ marginTop: '5px', color: '#ccc', marginBottom: 0 }}>Receive your official Level 1 Certification on the day of the program.</p>
          </motion.div>

          <motion.div variants={flipIn}>
            <h3 className="font-heading" style={{ fontSize: '1.1rem', color: 'var(--white)' }}>APPLY</h3>
            <p className="text-body" style={{ marginTop: '5px', color: '#ccc', marginBottom: 0 }}>Complete two guided case studies over the following three months; one on yourself and one on another individual.</p>
          </motion.div>

          <motion.div variants={flipIn}>
            <h3 className="font-heading" style={{ fontSize: '1.1rem', color: 'var(--white)' }}>BE RECOGNISED</h3>
            <p className="text-body" style={{ marginTop: '5px', color: '#ccc', marginBottom: 0 }}>Earn your shareable Level 1 Foundational Medicine Digital Badge upon successful submission and continue your learning through the Team Luke digital platform.</p>
          </motion.div>
        </motion.div>

        <motion.div variants={flipIn} style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' }}>
          <p className="text-body" style={{ fontStyle: 'italic', color: 'var(--white)', fontWeight: 600, marginBottom: 0, fontSize: '1rem' }}>
            The certificate marks the milestone.<br/>The framework stays with you.
          </p>
        </motion.div>
      </motion.div>

      {/* COLUMN 12 (Right - Page 12) */}
      <motion.div 
        className="col" 
        style={{ backgroundColor: '#f0f0f0' }}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={flipIn} className="icon-circle" style={{ position: 'relative', top: '0', right: '0', marginBottom: '20px', backgroundColor: '#333' }}>
          <Star size={32} />
        </motion.div>
        
        <motion.h2 variants={flipIn} className="title-dark font-heading" style={{ fontSize: '2.5rem' }}>THE<br/>FOUNDING<br/>70.</motion.h2>
        
        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1rem', marginTop: '20px', marginBottom: '10px' }}>
          Years from now, there may be thousands certified in Foundational Medicine.
        </motion.p>
        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1rem', fontWeight: 600 }}>
          Only seventy will be able to say they were there from the beginning.
        </motion.p>

        <motion.div variants={flipIn} className="divider-line" style={{ margin: '30px 0' }}></motion.div>

        <motion.p variants={flipIn} className="section-label" style={{ color: 'var(--black)', fontWeight: 'bold', fontSize: '1rem' }}>What's More?</motion.p>
        
        <motion.ul variants={flipIn} style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '15px', marginBottom: '40px' }}>
          <li style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '10px' }}>Direct access to Luke and the renowned faculty.</li>
          <li style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '10px' }}>Build relationships beyond the classroom.</li>
          <li style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>A founding community that grows with every cohort.</li>
        </motion.ul>

        <motion.div variants={flipIn} style={{ marginTop: 'auto', textAlign: 'center' }}>
          <p className="font-heading" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            The beginning of<br/>something bigger.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
