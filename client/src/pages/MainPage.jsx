import React from "react";
import { Link } from "react-router-dom";
import s from "../css/MainPage.module.css";
export default function MainPage() {
		return (
			<div className={s.Main}>
					<h1 className={s.Title}>Welcome</h1>
				{/* <div className={s.btcdiv}> */}
					<Link to="/countries">
						<button className={s.btn}>Go Home</button>
					</Link>
				{/* </div> */}
			</div>
		);
}
