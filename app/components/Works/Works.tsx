import type { FunctionComponent } from "react";
import React from "react";
import type { IWork } from "../../MyData";
import { Teaser } from "../Teaser/Teaser";
import styles from "./works.module.css"

interface IProps {
    works: IWork[];
}

export const Works: FunctionComponent<IProps> = ({ works }) => (
    <>
        <h2 className="stylish-h">{`< some of my works />`}</h2>
        <div className={styles.layout}>
            {works.map(({ name, tags }, index) => (
                <Teaser key={index} index={index} name={name} tags={tags} />
            ))}
        </div>
    </>
);
