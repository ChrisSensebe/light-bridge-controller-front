import React from 'react';

interface TitleProps {
    title: string
}

export const AppTitle = (props: TitleProps) => <h1>{props.title}</h1>;
