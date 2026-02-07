import scss from './Home.module.scss';
const Home = () => {
	return (
		<div className={scss.Home}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.content_title}>
						<h1>Рекомендуемые предметы первой необходимости</h1>
						<p>
							Коллекция тщательно отобранных предметов для современного образа
							жизни. Основной акцент — качество, минимализм и функциональность.
						</p>
					</div>
					<div className={scss.product_content}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
