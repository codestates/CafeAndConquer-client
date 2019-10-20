const registerList = ({ list }) => {
  console.log('register');
	const cafeList = list.map((elm, key) => {
		return (
			<li key={key}>
				<ul>
					<li>
						<span>
							{key + 1}. {elm.place_name}
						</span>
					</li>
					<li>
						<span>{elm.phone}</span>
					</li>
					<li>
						<span>{elm.address_name}</span>
					</li>
				</ul>
				<br />
			</li>
		);
	});

	return (
		<div>
			카페 목록
			<ul>{cafeList}</ul>
		</div>
	);
};

export default registerList;
