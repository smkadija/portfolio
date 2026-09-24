import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BehanceIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-3.455 0-5.555-2.29-5.555-5.719 0-3.568 2.308-5.836 5.617-5.836 3.52 0 5.253 2.457 4.965 6.005h-7.94c.063 1.954 1.341 3.05 3.084 3.05 1.542 0 2.441-.832 2.83-1.8l2.17.3zm-7.796-4.225h5.366c-.053-1.642-1.042-2.525-2.604-2.525-1.583 0-2.593.883-2.762 2.525zm-9.93-7.775h4.637c2.316 0 3.863 1.108 3.863 3.125 0 1.393-.827 2.38-2.023 2.766 1.57.387 2.596 1.488 2.596 3.189 0 2.275-1.782 3.67-4.256 3.67h-4.817v-12.75zm2.846 4.957h1.611c.95 0 1.531-.497 1.531-1.312 0-.837-.581-1.285-1.531-1.285h-1.611v2.597zm0 5.433h1.834c1.096 0 1.777-.552 1.777-1.468 0-.965-.681-1.532-1.777-1.532h-1.834v3z" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const LinkedInIcon = LinkedinIcon;
export const GitHubIcon = GithubIcon;

export const FiverrIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" />
  </svg>
);

export const FigmaIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M8 2h8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4z" opacity="0.9" />
    <path d="M8 10h4v4H8a4 4 0 0 1-4-4v0a4 4 0 0 1 4 0z" opacity="0.8" />
    <path d="M12 10h4a4 4 0 1 1 0 8h-4v-8z" opacity="0.9" />
    <path d="M8 14h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" opacity="0.7" />
    <circle cx="12" cy="12" r="2" fill="#050505" />
  </svg>
);

export const PhotoshopIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.5 7.5h3.5c1.4 0 2.5 1 2.5 2.3s-1.1 2.3-2.5 2.3H9v4.4H7.5V7.5zm1.5 3.3h1.8c.6 0 1.1-.4 1.1-1s-.5-1-1.1-1H9v2z" />
    <path d="M14.5 13.5c.5-.4 1.1-.6 1.7-.6.7 0 1.2.3 1.2.8 0 .5-.4.8-1.2 1.1-.9.3-1.7.9-1.7 1.8 0 1.1.9 1.9 2.2 1.9.7 0 1.3-.2 1.8-.5v-1.2c-.5.4-1.1.6-1.6.6-.7 0-1.1-.4-1.1-.8 0-.5.5-.8 1.3-1.1.9-.3 1.6-.9 1.6-1.8 0-1.1-.9-1.8-2.1-1.8-.7 0-1.4.2-1.9.5v1.2z" />
  </svg>
);

export const IllustratorIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 16.5l2.6-9h1.3l2.6 9H12l-.6-2.2H9.1L8.5 16.5H7zm2.4-3.4h1.7L10.3 10l-.9 3.1z" />
    <path d="M15 8.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8zm-.7 8h1.4V10h-1.4v6.5z" />
  </svg>
);

export const HtmlIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M4 3l1.5 16.5L12 21.5l6.5-2L20 3H4zm13.8 4.2l-.2 2.5H9.4l.2 2.3h7.7l-.6 6.8L12 20.2l-4.7-1.4-.3-3.6h2.2l.2 1.9 2.6.7 2.6-.7.3-3H7.5l-.6-7.5h10.9z" />
  </svg>
);

export const CssIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M4 3l1.5 16.5L12 21.5l6.5-2L20 3H4zm13.9 4.3l-.3 3.2H9.5l.2 2.2h7.6l-.6 6.5L12 20.4l-4.7-1.3-.3-3.8h2.3l.2 2 2.5.7 2.5-.7.3-3.4H7.4L7 5.3h11.1l-.2 2z" />
  </svg>
);

export const JsIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12.5v3.2c0 .8-.5 1.3-1.3 1.3-.5 0-.9-.2-1.2-.5v-1.1c.2.2.5.4.8.4.3 0 .4-.2.4-.6v-2.7H8zm4.8 1.4c0-.7-.5-1.1-1.4-1.3l-.6-.2c-.5-.1-.7-.3-.7-.5 0-.3.2-.5.6-.5.4 0 .8.2 1.1.4v-1.2c-.3-.2-.7-.3-1.1-.3-.9 0-1.6.5-1.6 1.4 0 .7.5 1.1 1.3 1.3l.6.2c.5.1.8.3.8.6 0 .3-.3.5-.7.5-.5 0-.9-.2-1.3-.5v1.2c.4.3.9.4 1.4.4 1 0 1.6-.5 1.6-1.3h-.1z" />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="3.5" ry="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <ellipse cx="12" cy="12" rx="3.5" ry="9.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <ellipse cx="12" cy="12" rx="3.5" ry="9.5" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
  </svg>
);

export const FlutterIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M13.5 2.5L4 12l2.8 2.8 12.2-12.3h-5.5z" />
    <path d="M13.5 12.5L9.2 16.8 12 19.6l4.3-4.3-2.8-2.8z" />
    <path d="M19 12.5l-4.3 4.3 2.8 2.8L21.8 15.3 19 12.5z" />
  </svg>
);

export const FirebaseIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M4.8 16.8L6.7 4.9c.1-.5.7-.7 1-.3l3 4.5-5.9 7.7z" opacity="0.8" />
    <path d="M10.7 9.1l2.5-4.4c.3-.5 1-.4 1.1.2l4.9 11.9-8.5-7.7z" opacity="0.9" />
    <path d="M3.5 17.5l8 4.6c.3.2.7.2 1 0l8-4.6-2.3-5.6-14.7 5.6z" />
  </svg>
);

export const ShopifyIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M18.8 6.4c-.1 0-.3.1-.4.2L16.6 4c-.2-.2-.5-.3-.7-.3h-.3c-.1-.7-.4-1.4-.9-1.9-.8-.8-1.9-1.1-2.9-.9-.8.2-1.5.7-2 1.4-.4.6-.6 1.3-.6 2.1l-1.9.6c-.4.1-.6.5-.5.9l1.6 12.3c.1.6.6 1.1 1.2 1.1h7.8c.6 0 1.1-.4 1.2-1l2.2-11.4c.1-.4-.1-.8-.4-.9l-.3-.1zM13 4.5c.6-.1 1.2.1 1.6.5.3.3.5.7.5 1.2l-3.2 1c.1-.8.4-1.5.9-2 .1-.4.4-.6.2-.7zm-1.8 5.7c-.2.1-.4.2-.6.3l-.7-2 1.8-.6-.5 2.3zm4.5 4.5c-.3.9-.9 1.5-1.7 1.8-.4.2-.9.2-1.3.1-.9-.2-1.4-.7-1.8-1.5-.4-1-.1-2.2.7-2.9.7-.6 1.7-.8 2.6-.5.3.1.5.3.7.6.3.8.2 1.7-.2 2.4z" />
  </svg>
);
