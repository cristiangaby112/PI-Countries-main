import React from "react";
import { Link } from "react-router-dom";
import s from "../css/MainPage.module.css";
export default function MainPage() {
		return (
			<div className={s.Main}>
				<div className={s.btcdiv}>
					<h1 className={s.title}>Bienvenidos</h1>
					<Link to="/countries">
						<button>Ingresar</button>
					</Link>
				</div>
			</div>
		);
}
