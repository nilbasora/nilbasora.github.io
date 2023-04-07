import { FC } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import remark from 'remark';
import html from 'remark-html';
import { join } from 'path';
import { readFileSync } from 'fs';

interface Props {
  content: string
}

const HomePage: FC<Props> = ({ content }) => {
  return (
    <main>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
        <div style={{ width: '10rem', height: '10rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid black' }}>
          <img src="https://avatars.githubusercontent.com/u/32940624" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Link href="/professional">
            <div dangerouslySetInnerHTML={{ __html: '<a style="display: inline-block; margin: 0.5rem;">Professional Blog</a>' }} />
          </Link>
          <Link href="/personal">
            <div dangerouslySetInnerHTML={{ __html: '<a style="display: inline-block; margin: 0.5rem;">Personal Blog</a>' }} />
          </Link>
        </div>
      </div>
      <div style={{ maxWidth: '50rem', margin: '2rem auto', textAlign: 'center' }}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = join(process.cwd(), 'src', 'posts', 'home.md');
  const fileContents = readFileSync(filePath, 'utf-8');
  const htmlContent = await remark().use(html).process(fileContents);
  const content = htmlContent.toString();

  return {
    props: {
      content: htmlContent,
    },
  };
};
