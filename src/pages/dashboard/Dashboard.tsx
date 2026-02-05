import scss from './Dashboard.module.scss';
const Dashboard = () => {
	return (
		<div className={scss.Dashboard}>
			<div className='container'>
				<div className={scss.content}>Dashboard</div>
			</div>
		</div>
	);
};

export default Dashboard;
