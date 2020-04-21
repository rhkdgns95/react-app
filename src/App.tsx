import React from 'react';

interface IProps {
	title: string;
}

const App: React.FC<IProps> = ({ title }: IProps) => {
	const items: Array<string> = ['age', 'test', 'roror', 'kkh'];
	return (
		<div>
			<h5>{title}</h5>
			{items.map((item, key) => (
				<p key={key}>{item}</p>
			))}
		</div>
	);
};

export default App;
