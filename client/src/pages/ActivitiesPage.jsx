import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivity } from "../actions/index";
import CardActivies from "../components/CardActivies";
import NavBar from "../components/NavBar";
import s from "../css/ActivitiesPage.module.css";
export default function ActivitiesPage() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className={s.card}>
        <h1 className={s.Title}>Activities list</h1>
				{/* <div className={s.list}> */}
					{activities?.map((c) => {
						return (
							<Fragment key={c.id}>
								<CardActivies
									name={c.name}
									difficulty={c.difficulty}
									duration={c.duration}
									season={c.season}
									key={c.id}
								/>
							</Fragment>
						);
					})}
				{/* </div> */}
      </div>
    </div>
  );
}
