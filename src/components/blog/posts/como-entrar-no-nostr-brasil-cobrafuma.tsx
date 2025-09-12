import React from 'react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "como-entrar-no-nostr-brasil-cobrafuma",
  "title": "X foi banido do Brasil: Como entrar no Nostr",
  "excerpt": "Cobrafuma.com oferece uma experiência de integração para brasileiros entrarem no Nostr, a única plataforma de mídia social verdadeiramente resistente à censura.",
  "coverImage": "/assets/blog/how-to-join-nostr-brazil/Cobarfuma-nostr-brazil-x-banned-twitter-alternative.png",
  "date": "2024-09-2",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/how-to-join-nostr-brazil/Cobarfuma-nostr-brazil-x-banned-twitter-alternative.png"
  },
  "tags": ["cobrafuma", "tutorial", "brazil"]
};

export default function ComoEntrarNoNostrBrasilCobrafuma() {
  return (
    <article className="prose prose-lg max-w-none">
      <p><strong><a href="/blog/how-to-join-nostr-brazil-cobrafuma" target="_blank" rel="noopener noreferrer">Read this page in English</a></strong></p>
      <h2>Nostr,  a solução para a censura no X/Twitter</h2>
      <p>Nostr é um protocolo resistente à censura para compartilhar conteúdo, semelhante ao X (Twitter). Nostr não é um unico website, como o X, por isso não pode ser banido ou censurado por qualquer governo ou CEO. Nostr oferece aos usuários total portabilidade de sua conta e conteúdo, e existem vários aplicativos diferentes que você pode usar para interagir com o conteúdo de outros usuários na rede. </p>
      <figure>
      <div className="grid grid-cols-3 gap-2">
      <img src="/assets/blog/how-to-join-nostr-brazil/join-nostr-brazil-twitter-banned-x-1.png"  />
      <img src="/assets/blog/how-to-join-nostr-brazil/join-nostr-brazil-twitter-banned-x-2.png"  />
      <img src="/assets/blog/how-to-join-nostr-brazil/join-nostr-brazil-twitter-banned-x-3.png"  />
      </div>
      <figcaption>Apps do Nostr (da esquerda para a direita): Amethyst, Primal e Ditto</figcaption>
      </figure>
      <h2>Como entrar no Nostr no Brasil?</h2>
      <p>Você pode acessar o Nostr de diversas maneiras e através de vários aplicativos. Para simplificar o processo de integração, criamos um ponto de partida para brasileiros que estão migrando do X. </p>
      <strong>Junte-se ao Nostr no Brasil em: <a href="https://cobrafuma.com" target="_blank" rel="noopener noreferrer">cobrafuma.com</a></strong>
      <figure>
        <img alt="Página inicial do Cobrafuma" src="/assets/blog/how-to-join-nostr-brazil/cobrafuma-brazil-nostr-alternative-to-x-twitter-banned.png"   />
        <figcaption><a href="https://cobrafuma.com" target="_blank">Cobrafuma</a> - uma comunidade Nostr para o Brasil</figcaption>
      </figure>
      <p>Assim que você se cadastrar no Cobrafuma, poderá usar suas chaves para acessar QUALQUER aplicativo Nostr! Explore todos os aplicativos Nostr <a href="http://nostrapps.com/" target="_blank" rel="noopener noreferrer">aqui</a>.</p>
      <h2>Cobrafuma, uma comunidade brasileira no Nostr</h2>
      <p>Cobrafuma é uma comunidade para brasileiros no Nostr. Com o Cobrafuma você pode fazer parte do protocolo Nostr sem medo de censura.</p>
      <strong>Como se juntar ao Cobrafuma:</strong>
      <p>1. Crie sua conta (obtenha suas chaves) 2. Escolha seu nome de usuário (seu handle@cobrafuma.com)  3. Explore a liberdade do Nostr! </p>
      <figure>
        <img alt="Claim your Cobrafuma.com username by going to Settings -&gt; Identity" src="/assets/blog/how-to-join-nostr-brazil/cobrafuma-join-nostr-set-username-twitter-alternative.png" />
        <figcaption>Reivindique seu nome de usuário no Cobrafuma.com indo para Configurações -&gt; Identidade</figcaption>
      </figure>
      <p>Cobrafuma é feito com <a href="/ditto" target="_blank" rel="noopener noreferrer">Ditto</a>, uma ferramenta para construir comunidades no Nostr.</p>
      <h2>Confira outras comunidades no Nostr:</h2>
      <p>Ditto oferece muitas maneiras de entrar no Nostr! Confira esses outros servidores para ver se algum deles é mais adequado para você:</p>
      <ul>
      <li><a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto.pub</a> - O servidor principal do Ditto</li>
      <li><a href="https://henhouse.social" target="_blank" rel="noopener noreferrer">Henhouse.social</a> - Uma comunidade para mulheres no Ditto</li>
      </ul></article>
  );
}