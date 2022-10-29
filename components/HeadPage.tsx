import Head from 'next/head'

const HeadPage = () => {
  return (
    <Head>
      <title>Dir Repo</title>
      <meta
        name='description'
        content='Proyecto que busca potenciar la contribuciones a proyectos open source'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
export default HeadPage
