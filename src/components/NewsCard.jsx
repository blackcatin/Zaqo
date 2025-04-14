function NewsCard({ index, title, tag, image }) {
    return (
        <li className='latest-news-card'>
            <span className='index'>{String(index + 1).padStart(2, '0')}</span>
            <img src={image} alt={title} className='thumbnail' />
            <div>
                <p className='title'>{title}</p>
                <p className='tag'>{tag}</p>
            </div>
        </li>
    );
}

export default NewsCard;
