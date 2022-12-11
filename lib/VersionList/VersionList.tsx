import React from "react";
import "./VersionList.css";

export interface VersionListProps {

    /**
     *  A POJO with key-value of package and version associated with the package.
     */
    versions: { [ key: string] : string };
};

function VersionLine({ name, version }: { name: string, version: string }) {
    return (
        <div className="cogi-uikit-versionlist-line">
            <span>{'>> [ '}</span>
            <code>{name}</code>
            <span>{'::'}</span>
            <code>{version}</code>
            <span>{' ]'}</span>
        </div>
    );
};

export function VersionList({ versions }: VersionListProps) {
    return (<div className="cogi-uikit-versionlist">
        {Object.entries(versions).map((row: [string, string]) => (<VersionLine key={`${row[0]}-$row[1]`} name={row[0]} version={row[1]}/>))}
    </div>);
};