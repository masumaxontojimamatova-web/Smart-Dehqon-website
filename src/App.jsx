export default function App() {
  return (
    <div style={{fontFamily:"Arial, sans-serif", background:"#06131a", color:"white", minHeight:"100vh", padding:"60px 20px"}}>
      <div style={{maxWidth:"1100px", margin:"0 auto"}}>
        <div style={{display:"inline-block", padding:"10px 16px", borderRadius:"999px", background:"rgba(16,185,129,0.12)", border:"1px solid rgba(16,185,129,0.25)", color:"#a7f3d0", fontSize:"14px"}}>
          🌾 Mirzo Ulug‘bek vorislari uchun loyiha prototipi
        </div>

        <h1 style={{fontSize:"56px", lineHeight:"1.1", marginTop:"20px", marginBottom:"16px"}}>
          SmartDehqon — sun’iy intellekt asosida hosildorlikni bashoratlash tizimi
        </h1>

        <p style={{fontSize:"20px", color:"#cbd5e1", maxWidth:"850px", lineHeight:"1.8"}}>
          O‘zbekiston iqlimi va tuproq sharoitiga mos, o‘simlik kasalliklarini erta aniqlaydigan,
          hosildorlikni prognoz qiladigan va dehqonga amaliy tavsiyalar beradigan aqlli agroplatforma.
        </p>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"18px", marginTop:"40px"}}>
          <div style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"20px", padding:"22px"}}>
            <h3>Hosildorlik prognozi</h3>
            <p style={{color:"#cbd5e1", lineHeight:"1.7"}}>AI yordamida hosildorlik ehtimolini oldindan tahlil qiladi.</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"20px", padding:"22px"}}>
            <h3>Kasallikni aniqlash</h3>
            <p style={{color:"#cbd5e1", lineHeight:"1.7"}}>O‘simlik rasmi asosida muammolarni erta aniqlash imkonini beradi.</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"20px", padding:"22px"}}>
            <h3>Offline ishlash</h3>
            <p style={{color:"#cbd5e1", lineHeight:"1.7"}}>Internet cheklangan hududlarda ham asosiy funksiyalar ishlashi mumkin.</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"20px", padding:"22px"}}>
            <h3>O‘zbekcha interfeys</h3>
            <p style={{color:"#cbd5e1", lineHeight:"1.7"}}>Dehqon va fermerlar uchun sodda va tushunarli foydalanish tajribasi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
