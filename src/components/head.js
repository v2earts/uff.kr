import * as React from "react"

export default function Head({ title, description, image }) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="naver-site-verification" content="ce7c6fcb4242b9449ac38219c11002cdcc2b332f" />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </>
  )
}
