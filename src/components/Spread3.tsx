
import { BookOpen } from 'lucide-react';
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

export default function Spread3() {
  return (
    <div className="brochure-container">
      {/* COLUMN 7 (Left - Page 7 - Black) */}
      <motion.div 
        className="col col-black" 
        style={{ padding: '40px' }}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={flipIn} className="title-main font-heading" style={{ fontSize: '2rem' }}>YOUR EXPERIENCE<br/>BEGINS BEFORE<br/>YOU ARRIVE.</motion.h2>
        <motion.div variants={flipIn} className="divider-line" style={{ backgroundColor: 'var(--white)', opacity: 0.3, width: '100%' }}></motion.div>
        
        <div style={{ marginTop: '30px' }}>
          <motion.div variants={flipIn} style={{ marginBottom: '30px' }}>
            <h3 className="font-heading" style={{ fontSize: '1.1rem', letterSpacing: '2px', color: 'var(--grey)' }}>BEFORE — Prepare</h3>
            <p className="text-body" style={{ marginTop: '10px', color: '#ccc' }}>
              Welcome Video from Luke<br/>
              Free Resources<br/>
              Reading & Reflection Kit
            </p>
          </motion.div>
          
          <motion.div variants={flipIn} style={{ marginBottom: '30px' }}>
            <h3 className="font-heading" style={{ fontSize: '1.1rem', letterSpacing: '2px', color: 'var(--grey)' }}>THE DAY — Immerse</h3>
            <p className="text-body" style={{ marginTop: '10px', color: '#ccc' }}>
              Executive classroom experience<br/>
              Faculty conversations<br/>
              Case discussions<br/>
              Assessment & Certification
            </p>
          </motion.div>

          <motion.div variants={flipIn}>
            <h3 className="font-heading" style={{ fontSize: '1.1rem', letterSpacing: '2px', color: 'var(--grey)' }}>BEYOND — Continue</h3>
            <p className="text-body" style={{ marginTop: '10px', color: '#ccc' }}>
              Digital learning<br/>
              Founding community<br/>
              Digital credential<br/>
              Continued education
            </p>
          </motion.div>
        </div>

        <motion.div variants={flipIn} style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' }}>
          <p className="text-body" style={{ fontStyle: 'italic', color: 'var(--grey)', marginBottom: 0 }}>
            One experience. Designed to extend far beyond one day.
          </p>
        </motion.div>
      </motion.div>

      {/* COLUMN 8 (Middle - Page 8) */}
      <motion.div 
        className="col" 
        style={{ backgroundColor: '#f0f0f0' }}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={flipIn} className="title-dark font-heading" style={{ fontSize: '1.8rem' }}>MONTHS OF<br/>LEARNING.<br/>IN ONE DAY.</motion.h2>
        <motion.p variants={flipIn} className="subtitle-dark font-heading" style={{ fontSize: '0.85rem', marginBottom: '20px' }}>THE LAWS THAT GOVERN HUMAN HEALTH.</motion.p>
        
        <motion.p variants={flipIn} className="text-body" style={{ marginBottom: '10px' }}>
          Every foundation follows principles. If you ignore them, health becomes harder. Understand them, and better decisions become natural.
        </motion.p>
        
        <motion.p variants={flipIn} className="section-label" style={{ marginTop: '20px', color: 'var(--black)', fontWeight: 'bold' }}>You'll explore:</motion.p>
        <motion.ul variants={flipIn} className="role-list" style={{ marginTop: '10px', marginBottom: '30px' }}>
          <li style={{ borderBottom: '1px dashed #ccc', fontWeight: 400 }}>The Laws of Nutrition</li>
          <li style={{ borderBottom: '1px dashed #ccc', fontWeight: 400 }}>The Laws of Deep Rest and Circadian Biology</li>
          <li style={{ borderBottom: '1px dashed #ccc', fontWeight: 400 }}>The Laws of Movement and Recovery</li>
          <li style={{ borderBottom: '1px dashed #ccc', fontWeight: 400 }}>The Laws of Emotional Wellness, Creating Safety and Belief</li>
          <li style={{ borderBottom: '1px dashed #ccc', fontWeight: 400 }}>The Laws of Nature: Internal & External Environment</li>
          <li style={{ borderBottom: '1px dashed #ccc', fontWeight: 400 }}>The Laws of Spirit & Breathwork</li>
          <li style={{ borderBottom: 'none', fontWeight: 400 }}>The Foundation of Hormonal Health</li>
        </motion.ul>

        <motion.div variants={flipIn} style={{ marginTop: 'auto', backgroundColor: 'var(--black)', color: 'var(--white)', padding: '20px', borderRadius: '8px' }}>
          <p className="text-body" style={{ marginBottom: 0, fontStyle: 'italic' }}>
            You won't simply learn what each foundation does. You'll discover how they influence one another.
          </p>
        </motion.div>
      </motion.div>

      {/* COLUMN 9 (Right - Page 9) */}
      <motion.div 
        className="col"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={flipIn} className="icon-circle" style={{ position: 'relative', top: '0', right: '0', marginBottom: '20px', backgroundColor: '#333' }}>
          <BookOpen size={32} />
        </motion.div>
        
        <motion.h2 variants={flipIn} className="title-dark font-heading" style={{ fontSize: '1.8rem' }}>INSIDE THE<br/>CLASSROOM</motion.h2>
        
        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1.1rem', fontWeight: 600, marginTop: '20px', marginBottom: '30px' }}>
          This is not a day of passive listening.
        </motion.p>
        
        <motion.div 
          variants={staggerContainer} 
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '40px' }}
        >
          {['Interactive learning', 'Real-world case discussions', 'Reflection exercises', 'Live assessments', 'Renowned faculty', 'Real-life heroes', 'Peer exchange', 'Personal interaction'].map((item, index) => (
            <motion.div key={index} variants={flipIn} style={{ backgroundColor: '#fff', padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>{item}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={flipIn} style={{ borderLeft: '4px solid var(--black)', paddingLeft: '15px' }}>
          <p className="text-body" style={{ fontStyle: 'italic', marginBottom: 0, fontSize: '0.95rem' }}>
            Because the most meaningful learning happens when ideas are questioned, perspectives are challenged and knowledge becomes personal.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
