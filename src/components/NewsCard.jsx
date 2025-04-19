import { Link } from 'react-router-dom';

function slugify(str) {
    return str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

function NewsCard({ index, title, tag, image }) {
    const slug = slugify(title);

    return (
        <li className='latest-news-card'>
            <Link to={`/news/${slug}`}>
                <span className='index'>{String(index + 1).padStart(2, '0')}</span>
                <img src={image} alt={title} className='thumbnail' />
                <div>
                    <p className='title'>{title}</p>
                    <p className='tag'>{tag}</p>
                </div>
            </Link>
        </li>
    );
}

export default NewsCard;
