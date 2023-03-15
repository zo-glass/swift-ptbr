import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Definitive Book',
    image_icon: 'https://www.apple.com/v/swift/c/images/overview/icon_ibooks_large.png',
    description: (
      <>
        Baixe The Swift Programming Language de graça na Apple Books Store. Aprenda como a linguagem Swift deixa a programação mais fácil, flexível e divertida.
      </>
    ),
    more: {
      text: 'Baixar o livro grátis >',
      link: 'https://itunes.apple.com/br/book-series/swift-programming-series/id888896989?mt=11',
    }
  },
  {
    title: 'Xcode',
    image_icon: 'https://developer.apple.com/assets/elements/icons/xcode/xcode-128x128_2x.png',
    description: (
      <>
        Xcode é o app do Mac usado para criar vários apps para Mac e iOS. Ele tem todas as ferramentas que você precisa para criar um app fantástico e pode ser baixado de graça na Mac App Store.
      </>
    ),
    more: {
      text: 'Baixar Xcode da Mac App Store >',
      link: 'https://itunes.apple.com/br/app/xcode/id497799835?ls=1&mt=12',
    }
  },
  {
    title: 'Site para desenvolvedores',
    image_icon: 'https://developer.apple.com/assets/elements/icons/swift-playgrounds-mac/swift-playgrounds-mac-96x96_2x.png',
    description: (
      <>
        Obtenha informações detalhadas e veja um panorama avançado sobre a plataforma Swift. Confira o blog dos desenvolvedores e fique em dia com as últimas notícias. E tenha acesso gratuito a excelentes recursos como guias, vídeos e código de amostra.
      </>
    ),
    more: {
      text: 'Saiba mais >',
      link: 'https://developer.apple.com/swift/',
    }
  },
];

function Feature({image_icon, title, description, more}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image_icon} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={more.link} target="_blank" rel="noopener noreferrer" >{more.text}</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
