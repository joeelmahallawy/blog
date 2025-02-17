import cn from 'classnames';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
  premium: boolean;
};

const CoverImage = ({ title, src, slug, premium }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );

  return (
    <div className="shadow hover:shadow-md">
      <div className="sm:mx-0">
        {slug ? (
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>{image}</a>
          </Link>
        ) : (
          image
        )}
      </div>
    </div>
  );
};

export default CoverImage;
