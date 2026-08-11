
import { motion } from 'framer-motion';

const flipIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 }
};

export default function Spread6() {
  return (
    <div className="brochure-container" style={{ gridTemplateColumns: '1fr 1fr' }}>
      
      {/* COLUMN 16 (Left - Page 16 - Black) */}
      <motion.div 
        className="col col-black" 
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px' }}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={flipIn} className="title-huge font-heading" style={{ fontSize: '3rem', marginBottom: '40px', lineHeight: '1.2' }}>
          THERE WILL NEVER BE ANOTHER FIRST COHORT.
        </motion.h2>
        
        <motion.p variants={flipIn} className="font-heading" style={{ fontSize: '1.2rem', letterSpacing: '2px', color: 'var(--grey)', marginBottom: '30px' }}>
          70 SEATS. ONE ROOM. ONE RHYTHM.
        </motion.p>
        
        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          This isn't valuable because it's limited. It's valuable because it's the beginning.
        </motion.p>

        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--white)', marginBottom: '40px' }}>
          Applications are now open.
        </motion.p>

        <motion.div variants={flipIn} style={{ marginTop: 'auto', borderTop: '2px solid rgba(255,255,255,0.2)', paddingTop: '30px' }}>
          <p className="text-body" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--white)', marginBottom: 0 }}>
            Your place isn't just in the room.<br/>It's in the first chapter of Foundational Medicine.
          </p>
        </motion.div>
      </motion.div>

      {/* COLUMN 17 (Right - Page 17) */}
      <motion.div 
        className="col" 
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', backgroundColor: '#f9f9f9' }}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.p variants={flipIn} className="subtitle font-heading" style={{ color: 'var(--dark-grey)', marginBottom: '10px' }}>
          LEVEL 1 CERTIFICATION IN FOUNDATIONAL MEDICINE
        </motion.p>
        
        <motion.h1 variants={flipIn} className="title-main font-heading" style={{ fontSize: '3.5rem', marginBottom: '5px' }}>
          FIND YOUR<br/>RHYTHM
        </motion.h1>
        
        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '40px' }}>
          With Luke Coutinho
        </motion.p>

        <motion.div variants={flipIn} className="divider-line" style={{ width: '100%', marginBottom: '40px' }}></motion.div>

        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          <strong>Saturday, September 26, 2026</strong> · 9 AM IST onwards<br/>
          Taj Lands End, Mumbai
        </motion.p>
        
        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--dark-grey)', marginBottom: '50px' }}>
          Applications Now Open · Limited to 70 Participants
        </motion.p>

        <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <motion.div variants={flipIn}>
            <p className="section-label" style={{ color: 'var(--black)', fontWeight: 'bold' }}>Reserve Your Seat</p>
            <p className="text-body" style={{ marginBottom: '5px', fontWeight: 600 }}>
              <a href="mailto:ankita.nair@lukecoutinho.com" className="email-link-dark">ankita.nair@lukecoutinho.com</a>
            </p>
            <p className="text-body" style={{ color: 'var(--dark-grey)' }}>+91 98218 51920</p>
          </motion.div>
          <motion.div variants={flipIn} style={{ paddingTop: '28px' }}>
            <p className="text-body" style={{ marginBottom: '5px', fontWeight: 600 }}>
              <a href="mailto:clive@lukecoutinho.com" className="email-link-dark">clive@lukecoutinho.com</a>
            </p>
            <p className="text-body" style={{ color: 'var(--dark-grey)' }}>+91 90498 84135</p>
          </motion.div>
        </motion.div>

      </motion.div>

    </div>
  );
}
