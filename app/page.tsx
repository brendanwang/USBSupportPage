import { ArrowUpRight, Mail, Bug, Volume2, Monitor, Plus, ArrowRight } from 'lucide-react';

const email = 'brendanwangwork@gmail.com';
const supportLink = `mailto:${email}?subject=${encodeURIComponent('USB Connection Sound — Support')}`;
const bugLink = `mailto:${email}?subject=${encodeURIComponent('USB Connection Sound — Bug report')}&body=${encodeURIComponent('What happened?\n\nWhat did you expect?\n\nSteps to reproduce:\n1. \n\nmacOS version:\nApp version:\nMac model:\nUSB device / hub:\n')}`;
const faqs = [
  ['Why don’t I hear a sound?', 'Make sure USB Connection Sound is running and USB sounds are enabled. Raise the app’s volume, then check your Mac’s output device, volume, and mute setting in System Settings → Sound. Try the Connection or Disconnection preview button. Previews work even when alerts are muted, but still use the app’s volume.'],
  ['Which devices are supported?', 'The app listens for USB devices, including devices attached through a USB hub. A USB-C accessory must identify itself to macOS as a USB device. Power-only cables, Bluetooth devices, and Thunderbolt-only devices do not trigger USB sounds.'],
  ['Does it keep working when I close the window?', 'Yes. Closing the window keeps monitoring active in the menu bar. Click the app’s menu bar icon to adjust the volume, toggle sounds, preview a chime, or choose Open App. Choosing Quit stops monitoring and sounds.'],
  ['Can I change the volume or mute alerts?', 'Yes. Use the volume slider and USB sounds toggle in the main window, or the Play USB sounds toggle in the menu bar. Your settings are saved and shared between both views. Muting sounds does not stop device tracking.'],
  ['Why is there no chime when I open the app?', 'Devices already connected are discovered silently when the app starts. Chimes play for new connection and disconnection events while the app is running.'],
  ['Why do I hear just one sound for several devices?', 'A hub can connect or disconnect several devices at once. Events in the same direction within half a second share one chime to avoid a burst of sounds.'],
  ['Why do I hear a chime when my Mac wakes up?', 'macOS can rediscover USB devices after sleep or wake. The app may receive these as connection changes, even if you haven’t physically unplugged anything.'],
  ['Which Macs can run the app?', 'USB Connection Sound requires macOS 14 Sonoma or later and supports Apple silicon and Intel Macs. No driver installation is required.'],
  ['What if monitoring is unavailable?', 'If the main window shows an error and a Retry button, click Retry. If the issue continues, quit and reopen the app. Send a bug report with the error message, your macOS version, and the device or hub involved.'],
];

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><a className="brand" href="#"><img className="app-icon" src="/app-icon.png" width={42} height={42} alt=""/><span>USB Connection Sound</span></a><a className="header-link" href={supportLink}>Contact support <ArrowUpRight size={16}/></a></header>
    <main id="main">
      <section className="intro"><div className="eyebrow"><span/> HERE TO HELP</div><h1>A little help.<br/><span>A clear connection.</span></h1><p>Support for USB Connection Sound for Mac.<br className="desktop-break"/> Find an answer below, or get in touch directly.</p></section>
      <section className="contact-grid" aria-label="Contact support">
        <a className="contact-card primary" href={supportLink}><span className="card-icon"><Mail size={25}/></span><ArrowUpRight className="card-arrow" size={22}/><h2>Email support</h2><p>Have a question or need a hand?<br/>Let’s figure it out.</p><span className="card-action">Get in touch <ArrowRight size={17}/></span></a>
        <a className="contact-card" href={bugLink}><span className="card-icon"><Bug size={25}/></span><ArrowUpRight className="card-arrow" size={22}/><h2>Report a bug</h2><p>Something not working as expected?<br/>Tell me what happened.</p><span className="card-action">Send a bug report <ArrowRight size={17}/></span></a>
      </section>
      <p className="email-note">Both links open your email app. You can also write to <a href={supportLink}>{email}</a>.</p>
      <section className="quick-start" aria-labelledby="start-heading"><div className="section-label"><Volume2 size={19}/><h2 id="start-heading">Start with a sound check</h2></div><ol><li><span>01</span><p>Open the app and turn on <strong>USB sounds</strong>.</p></li><li><span>02</span><p>Set the volume and click <strong>Connection</strong> to preview.</p></li><li><span>03</span><p>Plug in a USB device and listen for the chime.</p></li></ol></section>
      <section className="faq" aria-labelledby="faq-heading"><div className="faq-heading"><div className="eyebrow">A FEW QUICK ANSWERS</div><h2 id="faq-heading">Frequently asked<br/>questions.</h2><p>Getting connected, staying in control,<br/>and making sense of the sounds.</p><span className="platform"><Monitor size={16}/> macOS 14 or later</span></div><div className="faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<Plus size={18}/></summary><p>{answer}</p></details>)}</div></section>
      <aside className="report-note"><Bug size={20}/><p><strong>A helpful bug report makes a difference.</strong> Include your macOS version, app version, USB device or hub, and the steps that caused the issue. A screenshot of any error helps, too.</p></aside>
    </main>
    <footer><span>USB Connection Sound <span className="footer-divider">/</span> Support</span><span>Made for the little connections.</span></footer>
  </>;
}
