
import { Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Spread1() {
  return (
    <motion.div 
      className="brochure-container"
      initial={{ y: '15vh', opacity: 0, rotateX: 20, backgroundColor: '#222222', boxShadow: 'none' }}
      animate={{ y: 0, opacity: 1, rotateX: 0, backgroundColor: '#E5E5E5', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
      transition={{ 
        duration: 1.5, 
        ease: [0.22, 1, 0.36, 1],
        backgroundColor: { delay: 3.0, duration: 0.8 },
        boxShadow: { delay: 3.0, duration: 0.8 }
      }}
    >
      {/* COLUMN 1 (Left - Black - Folds OVER Right) */}
      <motion.div 
        className="col col-black"
        initial={{ rotateY: 179.9, zIndex: 30 }}
        animate={{ rotateY: 0, transitionEnd: { zIndex: 1 } }}
        transition={{ duration: 1.6, delay: 3.0, ease: [0.25, 1, 0.4, 1] }}
        style={{ transformOrigin: 'right', transformStyle: 'preserve-3d' }}
      >
        {/* FRONT FACE (Inside of brochure) */}
        <div style={{ backfaceVisibility: 'hidden', width: '100%', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <img 
            src="/top-img.png" 
            alt="Health Abstract" 
            className="img-top-curve" 
          />
          
          <div className="col-black-content">
            <h1 className="title-main font-heading">FIND YOUR<br/>RHYTHM</h1>
            <p className="subtitle font-heading">LEVEL 1 CERTIFICATION</p>
            
            <p className="text-body">
              Level 1 Certification in Foundational Medicine with Luke Coutinho. 
              Join us in person to understand the foundations that shape human health.
            </p>
            
            <p className="text-body" style={{ marginTop: '20px' }}>
              <strong>Taj Lands End, Mumbai</strong><br />
              Saturday, September 26, 2026<br />
              9:00 AM IST onwards
            </p>
            
            <div className="contact-info">
              <p>Reserve your seat:</p>
              <p>ankita.nair@lukecoutinho.com</p>
              <p>+91 98218 51920</p>
              <p style={{ marginTop: '10px' }}>clive@lukecoutinho.com</p>
              <p>+91 90498 84135</p>
            </div>
          </div>
        </div>

        {/* BACK FACE (Outside Cover) */}
        <div style={{ 
          backfaceVisibility: 'hidden', 
          transform: 'rotateY(180deg)', 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: '#111111',
          boxShadow: 'inset -30px 0 60px rgba(0,0,0,0.8), 20px 20px 50px rgba(0,0,0,0.5)',
          borderRight: '1px solid #333'
        }}>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '40px', textAlign: 'center' }}>
             <h2 style={{ color: '#fff', fontSize: '3rem', fontFamily: 'Montserrat', fontWeight: 800 }}>FIND YOUR<br/>RHYTHM</h2>
             <p style={{ color: '#ccc', marginTop: '20px', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Level 1 Certification</p>
             <div style={{ width: '40px', height: '2px', backgroundColor: '#fff', marginTop: '30px' }}></div>
             <p style={{ color: '#888', marginTop: '30px', fontSize: '0.9rem', fontStyle: 'italic' }}>With Luke Coutinho</p>
           </div>
        </div>
      </motion.div>

      {/* COLUMN 2 (Middle - Light Grey) */}
      <motion.div 
        className="col"
        initial={{ filter: 'brightness(0.2)', zIndex: 5 }}
        animate={{ filter: 'brightness(1)' }}
        transition={{ duration: 1.5, delay: 3.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg 
          className="shape-blob" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#111111" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.4,-46.3C91,-33.5,97.3,-18,97.7,-2.3C98.1,13.4,92.5,29.3,82.8,42.5C73.1,55.7,59.3,66.2,44.4,73.1C29.5,80,13.5,83.3,-2.2,86.9C-17.9,90.5,-33.3,94.4,-47.1,89.5C-60.9,84.6,-73,70.9,-81.1,56C-89.2,41.1,-93.3,25,-94.1,9.4C-94.9,-6.2,-92.4,-21.3,-84.9,-33.6C-77.4,-45.9,-64.9,-55.4,-51.7,-63.1C-38.5,-70.8,-24.6,-76.7,-10,-79.1C4.6,-81.5,19.2,-80.4,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100) scale(1.5)" />
        </svg>

        <div style={{ marginTop: '60px', zIndex: 2, position: 'relative', paddingBottom: '350px' }} className="text-center">
          <h2 className="title-dark font-heading">A NOTE</h2>
          <p className="subtitle-dark font-heading">FROM LUKE</p>
          
          <p className="text-body" style={{ marginTop: '40px', padding: '0 20px 0 40px', textAlign: 'left', position: 'relative', zIndex: 10 }}>
            For more than 15 years, one question stayed with me. Why do we continue treating the body in parts when it has always functioned as one whole?
          </p>
          
          <p className="text-body" style={{ padding: '0 20px 0 40px', textAlign: 'left', position: 'relative', zIndex: 10 }}>
            Medicine, nutrition, movement, psychology, and research have each advanced remarkably. Yet too often they are practiced in isolation. The person in the middle is left trying to connect what the system has separated.
          </p>
          
          <p className="text-body" style={{ padding: '0 20px 0 40px', textAlign: 'left', position: 'relative', zIndex: 10 }}>
            That observation changed the way my team and I worked. Every client. Every clinical discussion. We began looking for what existed beneath every diagnosis, every symptom, and every protocol.
          </p>
        </div>

        <div className="circle-quote">
          <span className="quote-mark">“</span>
          <p className="font-heading" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>FOUNDATIONS.</p>
          <p>Because when the foundations improve, everything built upon them improves too.</p>
        </div>
      </motion.div>

      {/* COLUMN 3 (Right - Light Grey - Folds UNDER Left, OVER Middle) */}
      <motion.div 
        className="col col-right"
        initial={{ rotateY: -179.9, zIndex: 20 }}
        animate={{ rotateY: 0, transitionEnd: { zIndex: 1 } }}
        transition={{ duration: 1.5, delay: 3.6, ease: [0.25, 1, 0.4, 1] }}
        style={{ transformOrigin: 'left', transformStyle: 'preserve-3d', padding: 0 }}
      >
        {/* FRONT FACE (Inside flap) */}
        <div style={{ backfaceVisibility: 'hidden', width: '100%', height: '100%', position: 'relative', padding: '40px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
            <div className="icon-circle">
              <Activity size={32} />
            </div>
            
            <h1 className="title-huge font-heading" style={{ fontSize: '2.5rem', marginTop: '100px' }}>FOUNDATIONAL</h1>
            <p className="subtitle-huge font-heading">MEDICINE</p>
            
            <div className="divider-line"></div>
            
            <p className="text-body" style={{ marginTop: '20px', textAlign: 'right' }}>
              <strong>Why Now?</strong><br/><br/>
              Healthcare has never had more answers. Yet chronic disease continues to rise.
            </p>
            <p className="text-body" style={{ textAlign: 'right' }}>
              The future of health may not depend on discovering more. It may depend on connecting what we've already learned.
            </p>
          </div>
          
          <img 
            src="/bottom-img.png" 
            alt="Rhythm Background" 
            className="img-bottom-slant" 
          />
        </div>

        {/* BACK FACE (Inside Flap Backwards) */}
        <div style={{ 
          backfaceVisibility: 'hidden', 
          transform: 'rotateY(180deg)', 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: '#e0e0e0',
          boxShadow: 'inset 30px 0 60px rgba(0,0,0,0.15)',
          borderLeft: '1px solid #ccc'
        }}>
        </div>
      </motion.div>
    </motion.div>
  );
}
