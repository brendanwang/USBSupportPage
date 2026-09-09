import type { Metadata } from 'next';
import { ArrowLeft, Cable } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Privacy Policy — USB Connection Sound',
  description: 'Privacy policy for USB Connection Sound for Mac.',
};

const email = 'brendanwangwork@gmail.com';
const assetPrefix = process.env.GITHUB_ACTIONS === 'true' ? '/USBSupportPage' : '';

export default function PrivacyPolicy() {
  return <>
    <header className="header">
      <a className="brand" href={`${assetPrefix}/`}>
        <img className="app-icon" src={`${assetPrefix}/app-icon.png`} width={42} height={42} alt=""/>
        <span>USB Connection Sound</span>
      </a>
      <a className="header-link" href={`${assetPrefix}/`}>Support</a>
    </header>
    <main className="policy-main">
      <a className="policy-back" href={`${assetPrefix}/`}><ArrowLeft size={17}/> Back to support</a>
      <div className="eyebrow"><span/> PRIVACY POLICY</div>
      <h1>Your connections<br/><span>stay on your Mac.</span></h1>
      <p className="policy-date">Effective September 9, 2026</p>

      <p className="policy-summary">USB Connection Sound does not collect, transmit, sell, or share personal data.</p>

      <section className="policy-section">
        <h2>Data collection</h2>
        <p>The app does not collect personal information, usage data, analytics, diagnostics, advertising identifiers, or information about your connected USB devices. It does not include advertising or tracking technology.</p>
      </section>
      <section className="policy-section">
        <h2>Information stored on your Mac</h2>
        <p>Your sound-enabled preference and volume setting are stored locally on your Mac so the app can remember them. These settings are not transmitted to the developer or any third party.</p>
      </section>
      <section className="policy-section">
        <h2>USB device information</h2>
        <p>The app reads USB connection events and device details provided by macOS only to show connected devices and play connection or disconnection sounds. This information stays on your Mac and is not uploaded or retained by the developer.</p>
      </section>
      <section className="policy-section">
        <h2>Third parties</h2>
        <p>The app does not share data with third parties and does not use third-party analytics, advertising, or tracking services.</p>
      </section>
      <section className="policy-section">
        <h2>Changes to this policy</h2>
        <p>If the app’s privacy practices change, this policy will be updated to describe the new practices and their effective date.</p>
      </section>
      <section className="policy-section">
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to <a href={`mailto:${email}?subject=${encodeURIComponent('USB Connection Sound — Privacy')}`}>{email}</a>.</p>
      </section>
    </main>
    <footer><span><Cable size={14}/> USB Connection Sound <span className="footer-divider">·</span> © 2026 Brendan Wang</span><a className="footer-link" href={`${assetPrefix}/`}>Support</a></footer>
  </>;
}
