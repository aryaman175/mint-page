import React from "react";
import classes from "./menu.module.css"

export default function Menu() {
  return (
    <div className={classes.container}>
        <h1>Kickback</h1>
      <div className={classes.nav}>
        <a
          href={"https://twitter.com/viaKickback"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Twitter</p>
        </a>
        <a
          href={"https://discord.gg/5BrvrMxaJ2"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Discord</p>
        </a>
        <a
          href={"https://apps.apple.com/us/app/kickback-podcasts/id1624560242"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>App</p>
        </a>
        <a
          href={"https://www.kickback.fm/about"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>About Us</p>
        </a>
        <a
          href={"https://www.kickback.fm/monetize"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Monetization</p>
        </a>
      </div>
    </div>
  );
}
