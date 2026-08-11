
import { MessageSquare, CreditCard } from 'lucide-react';
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

export default function Spread5() {
  return (
    <div className="brochure-container">
      {/* COLUMN 13 (Left - Page 13 - Black) */}
      <motion.div 
        className="col col-black" 
        style={{ padding: '40px' }}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={flipIn} className="title-main font-heading" style={{ fontSize: '2.2rem', marginBottom: '30px' }}>THE CLASSROOM<br/>IS ONLY<br/>DAY ONE.</motion.h2>
        
        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1.1rem' }}>
          Your certification does not end when the classroom closes.
        </motion.p>
        
        <motion.p variants={flipIn} className="text-body">
          Continue learning with Luke and Team Luke experts through exclusive digital modules designed to help you revisit concepts, deepen understanding and translate learning into everyday life and practice.
        </motion.p>

        <motion.div variants={flipIn} style={{ margin: '40px 0', borderLeft: '4px solid var(--white)', paddingLeft: '20px' }}>
          <p className="font-heading" style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: '1.6' }}>
            LEARN.<br/>REFLECT.<br/>APPLY.<br/>REVISIT.<br/>INTEGRATE.
          </p>
        </motion.div>

        <motion.div variants={flipIn} style={{ marginTop: 'auto' }}>
          <p className="text-body" style={{ fontStyle: 'italic', color: 'var(--grey)', marginBottom: 0 }}>
            Learning that continues long after the room is empty.
          </p>
        </motion.div>
      </motion.div>

      {/* COLUMN 14 (Middle - Page 14) */}
      <motion.div 
        className="col" 
        style={{ backgroundColor: '#f0f0f0' }}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={flipIn} className="icon-circle" style={{ position: 'relative', top: '0', right: '0', marginBottom: '20px', backgroundColor: '#333' }}>
          <MessageSquare size={32} />
        </motion.div>
        
        <motion.h2 variants={flipIn} className="title-dark font-heading" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>SOME ROOMS<br/>CHANGE THE WAY<br/>YOU SEE EVERYTHING AFTER.</motion.h2>
        <motion.p variants={flipIn} className="subtitle-dark font-heading" style={{ fontSize: '0.75rem', marginBottom: '30px' }}>REFLECTIONS FROM PREVIOUS SEMINARS & MASTERCLASSES</motion.p>

        <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <motion.div variants={flipIn} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '4px', borderLeft: '4px solid var(--black)' }}>
            <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '10px' }}>"Luke has a rare ability to connect science with everyday life. You don't just leave informed—you leave thinking differently."</p>
            <p className="font-heading" style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: 0 }}>Dr. Aditi Mehra</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--dark-grey)' }}>General Physician</p>
          </motion.div>

          <motion.div variants={flipIn} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '4px', borderLeft: '4px solid var(--black)' }}>
            <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '10px' }}>"I came expecting practical tips. I left with an entirely new way of thinking."</p>
            <p className="font-heading" style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: 0 }}>Karan Shah</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--dark-grey)' }}>Health Coach</p>
          </motion.div>

          <motion.div variants={flipIn} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '4px', borderLeft: '4px solid var(--black)' }}>
            <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '10px' }}>"Luke has a remarkable way of making complex science simple, practical, and immediately applicable."</p>
            <p className="font-heading" style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: 0 }}>Priya Nair</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--dark-grey)' }}>Nutrition Professional</p>
          </motion.div>

          <motion.div variants={flipIn} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '4px', borderLeft: '4px solid var(--black)' }}>
            <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '10px' }}>"The learning didn't end when the seminar ended. It changed the conversations I continued to have with my family, clients and colleagues."</p>
            <p className="font-heading" style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: 0 }}>Rahul Desai</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--dark-grey)' }}>Entrepreneur</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* COLUMN 15 (Right - Page 15) */}
      <motion.div 
        className="col"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={flipIn} className="icon-circle" style={{ position: 'relative', top: '0', right: '0', marginBottom: '20px', backgroundColor: '#333' }}>
          <CreditCard size={32} />
        </motion.div>
        
        <motion.h2 variants={flipIn} className="title-dark font-heading" style={{ fontSize: '2.2rem' }}>AN INVESTMENT<br/>IN PERSPECTIVE.</motion.h2>
        
        <motion.p variants={flipIn} className="text-body" style={{ fontSize: '1rem', marginTop: '20px', marginBottom: '30px' }}>
          Some investments deliver returns in months. Others change the way you think for a lifetime.
        </motion.p>

        <motion.div variants={flipIn} style={{ border: '2px solid var(--black)', padding: '20px', textAlign: 'center', marginBottom: '30px' }}>
          <p className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>₹39,000 <span style={{ fontSize: '1rem', fontWeight: 600 }}>+ GST</span></p>
        </motion.div>

        <motion.p variants={flipIn} className="section-label" style={{ color: 'var(--black)', fontWeight: 'bold', fontSize: '0.9rem' }}>Your investment includes:</motion.p>
        
        <motion.ul variants={flipIn} style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px', marginBottom: '30px' }}>
          <li style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '8px' }}>The complete Level 1 classroom experience</li>
          <li style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '8px' }}>Assessment & Certificate of Participation</li>
          <li style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '8px' }}>Digital LinkedIn badge (post-assessment)</li>
          <li style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '8px' }}>Premium welcome experience</li>
          <li style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '8px' }}>Reflection materials</li>
          <li style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '8px' }}>Continued digital learning</li>
          <li style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Founding community access</li>
        </motion.ul>

        <motion.div variants={flipIn} style={{ marginTop: 'auto', backgroundColor: 'var(--black)', color: 'var(--white)', padding: '20px', borderRadius: '4px' }}>
          <p className="text-body" style={{ fontStyle: 'italic', margin: 0, fontSize: '0.9rem' }}>
            Limited to 70 participants. A deliberately intimate format designed to protect the quality of the experience, meaningful dialogue, and personal faculty interaction.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
