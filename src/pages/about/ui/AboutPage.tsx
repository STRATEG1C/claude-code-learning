import { Header } from '../../../widgets/header/ui/Header';
import './AboutPage.css';

export function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <div className="about-page__content">
        <div className="container">
          <h2 className="about-page__title">About</h2>
          <p className="about-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}
