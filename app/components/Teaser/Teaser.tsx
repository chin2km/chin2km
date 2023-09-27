import type { FunctionComponent } from "react";
import React from "react";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import type { IWork } from "../../MyData";

import styles from "./teaser.module.css"

export const Teaser: FunctionComponent<Pick<IWork, "tags" | "name"> & { index: number }> = ({ name, tags, index }) => (
    <InView triggerOnce={false} rootMargin={"-20% 0px -20% 0px"}>
        {({ inView, ref }) => {
            return (
                <div className={styles.box} data-inview={inView ? "true" : "false"} ref={ref}>
                    <Link to={`/works/${index}`}>
                        <h4 className="stylish-h">{name}</h4>
                        <img className={styles.teaserImage} src={`../../thumbs/${name}.png`} alt={name}></img>
                        <div>{tags && tags.map((tag, index) => <span className={styles.tag} key={index}>{tag}</span>)}</div>
                    </Link>
                </div>
            )
        }}
    </InView>
);
