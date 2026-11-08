'use client'

import Link from 'next/link'
import { ArrowRight, Brain, Check, Code2, Lightbulb, Menu, Users, X } from 'lucide-react'
import { useState } from 'react'

const imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%D1%82%D0%BE%D0%BB%D0%B0%20%D0%BA%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B0%D0%BC-5Na5Acb9w18aHtkTmFsm7MpRB1osfv.jpg'

function Logo() {
  return <Link href="/" className="brand-mark" aria-label="Junior IT — на головну"><span>JUNIOR</span><b>IT</b></Link>
}

const practice = [
  { icon: Users, number: '01', title: 'До 5 дітей у групі', text: 'Викладач бачить прогрес кожної дитини та допомагає, коли виникають складнощі.', tag: '10 років досвіду навчання дітей IT' },
  { icon: Brain, number: '02', title: '80% заняття — практика', text: 'Дитина не просто слухає викладача, а пише код, виконує завдання та створює власні проєкти.', tag: 'Результат кожного курсу — власний проєкт' },
  { icon: Code2, number: '03', title: 'Платформа + записи + куратор', text: 'Усі матеріали й записи занять доступні на платформі, а куратор супроводжує дитину протягом навчання.', tag: 'Навчання не закінчується після уроку' },
]

export function JuniorITSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main>
      <section className="hero" id="top" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="hero-overlay" />
        <header className="site-header"><Logo /><nav className={menuOpen ? 'open' : ''}><a href="#why">Про навчання</a><a href="#practice">Як це працює</a><a href="#contact">Контакти</a></nav><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Відкрити меню">{menuOpen ? <X /> : <Menu />}</button></header>
        <div className="hero-content">
          <div className="registration-wrap">
            <div className="registration-card">
              <h3 className="registration-card-title">Безкоштовне пробне заняття з програмування та AI</h3>
              <div id="leeloo_action_element" className="leeloo-hash-giethu">
                <div className="leeloo-lgt-form-wrapper">
                  <iframe
                    className="leeloo-lgt-form"
                    id="leeloo-form-iframe-giethu"
                    src="https://wep.wf/giethu"
                    style={{
                      border: '0px',
                      width: '100%',
                      height: '500px',
                      display: 'block',
                    }}
                    title="Реєстрація на пробне заняття"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Від користування технологіями — до власних цифрових проєктів</div>
            <h1>Програмування, AI та практичні цифрові навички через <mark>створення власних проєктів</mark></h1>
            <div className="pills">
              <span>🤖 Програмування + AI</span>
              <span>🚀 Власні цифрові проєкти</span>
              <span>🧠 Логіка, критичне мислення та самостійність</span>
            </div>
          </div>
        </div>
        <div className="hero-grid-lines" aria-hidden="true" />
      </section>

      <section className="value-section" id="why"><div className="section-code">JIT / 02</div><div className="value-icon"><Lightbulb size={28} /></div><p className="section-label">ЗНАННЯ, ЯКІ ПРАЦЮЮТЬ</p><h2>Не просто вивчати — <em>створювати</em><br />власні проєкти</h2><p>Дитина створює сайти, програми, ігри, Telegram-боти та AI-проєкти залежно від віку й курсу. Вчиться знаходити рішення, працювати з AI та доводити власні ідеї до готового результату.</p></section>

      <section className="practice-section" id="practice"><div className="section-heading"><div><p className="section-label">ПІДХІД JUNIOR IT <span>// 03</span></p><h2>Навчання, де дитина<br /><em>постійно практикується</em></h2></div><p className="heading-aside">Усе, що ми робимо, має одну мету: щоб дитина не боялася технологій, а створювала з їх допомогою.</p></div><div className="practice-grid">{practice.map(({ icon: Icon, number, title, text, tag }) => <article className="practice-card" key={number}><div className="card-top"><span className="icon-box"><Icon size={24} /></span><span className="card-number">{number}</span></div><h3>{title}</h3><p>{text}</p><div className="card-tag"><Check size={15} /> {tag}</div></article>)}</div></section>

      <section className="closing-cta" id="contact"><div><p className="section-label">ГОТОВІ ПОЧАТИ? <span>// 04</span></p><h2>Дай можливість дитині<br /><em>створити свій перший проект</em></h2></div><a className="outline-button" href="#top">Записатися на пробне <ArrowRight size={18} /></a></section>
      <footer className="site-footer"><div><Logo /><p>Junior IT — 10 років навчаємо дітей програмуванню та сучасним IT-технологіям</p></div><div className="footer-links"><Link href="/agreement">Договір оферти</Link><Link href="/privacy-policy">Політика конфіденційності</Link><Link href="/return-policy">Політика повернення</Link></div><span className="copyright">© 2026 JUNIOR IT</span></footer>
    </main>
  )
}
