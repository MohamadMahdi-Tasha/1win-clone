// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    name: 'lock' | 'mobile' | 'arrow-right' | 'star-bag' | 'windows' | 'android' | 'apple' | 'chevron' | 'tick' | 'plus' | 'list' | 'search' | 'person' | 'x' | 'chat' | 'telegram';
    size: number;
}

// Creating and exporting icon component as default
export default function IconComponent({name, size}:propsType):ReactNode {
    // Conditional rendering
    if (name === 'lock') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" aria-hidden="true" width={size} height={size}>
                <path d="M26.76 16.08H9.62a1.86 1.86 0 00-1.85 1.85v7.37a6.43 6.43 0 006.41 6.42H22a6.3 6.3 0 006.28-6.28v-7.86a1.5 1.5 0 00-1.52-1.5zm-8.45 8.78v1.74a.57.57 0 01-.57.54.58.58 0 01-.58-.54v-1.75a2.42 2.42 0 01-1.87-2.39 2.46 2.46 0 114.92 0 2.42 2.42 0 01-1.9 2.39zM18.06 4.23h-.12A6.75 6.75 0 0011.22 11v4h1.13v-4.12A5.46 5.46 0 0114 7a5.56 5.56 0 013.93-1.61H18A5.62 5.62 0 0123.52 11v3.89h1.13v-4a6.72 6.72 0 00-6.59-6.66z" fill={'currentColor'} />
            </svg>
        );
    } else if (name === 'mobile') {
        return (
            <svg width={size} height={size} viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0c1.657 0 3 1.28 3 2.857v14.286C15 18.72 13.657 20 12 20H3c-1.657 0-3-1.28-3-2.857V2.857C0 1.28 1.343 0 3 0h9zM4.5 1.429v.428a1 1 0 001 1h4a1 1 0 001-1V1.43H12l.175.01c.746.082 1.325.686 1.325 1.418v14.286l-.01.166c-.087.71-.72 1.262-1.49 1.262H3l-.175-.01c-.746-.082-1.325-.686-1.325-1.418V2.857l.01-.166c.087-.711.72-1.262 1.49-1.262h1.5z" fill="currentColor" />
            </svg>
        );
    } else if (name === 'arrow-right') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" width={size} height={size}>
                <path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z" fill={'currentColor'} />
            </svg>
        );
    } else if (name === 'star-bag') {
        return (
            <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={size} height={size}>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.462 1.662c-.035-.503.341-.916.909-.887C5.9.8 6.705 1.232 7.462 2.62H7.146c-.47.026-1.173-.006-1.754-.177-.611-.18-.908-.449-.93-.782zm3.522.37C7.188.686 6.257.072 5.408.03 4.402-.02 3.652.758 3.719 1.714c.059.842.805 1.252 1.464 1.445.684.2 1.472.234 1.994.207H8.798c.528.027 1.327-.006 2.02-.207.664-.192 1.421-.6 1.481-1.445.068-.961-.695-1.733-1.707-1.684-.856.043-1.8.654-2.608 2.002zm3.572-.37c.035-.497-.343-.916-.927-.887-.541.026-1.358.46-2.125 1.846H8.829c.478.026 1.192-.006 1.782-.177.623-.18.922-.452.946-.782z" fill="#E8B2FF" />
                <path fillRule="evenodd" clipRule="evenodd" d="M4.322 4.178A2.484 2.484 0 001.84 6.662v5.747a2.484 2.484 0 002.483 2.483h7.355a2.484 2.484 0 002.483-2.483V6.662a2.484 2.484 0 00-2.483-2.484H4.322zm5.328 6.137l.864-.875a.573.573 0 00.137-.58.542.542 0 00-.437-.382L9.02 8.297 8.486 7.17a.538.538 0 00-.485-.314H8a.54.54 0 00-.486.314L6.98 8.297l-1.192.18a.546.546 0 00-.44.383.576.576 0 00.138.58l.864.875-.204 1.238a.572.572 0 00.216.552.527.527 0 00.318.109.523.523 0 00.251-.067L8 11.563l1.066.584a.517.517 0 00.571-.042.569.569 0 00.217-.552l-.204-1.238z" fill="#fff" />
            </svg>
        );
    } else if (name === 'windows') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39" aria-hidden="true" width={size} height={size}>
                <path fill="currentColor" d="M0 5.496l15.816-2.154.007 15.256-15.809.09L0 5.496zm15.808 14.86l.013 15.269L.012 33.45V20.253l15.796.103zM17.726 3.06L38.696 0v18.404l-20.97.166V3.06zM38.7 20.499l-.005 18.322-20.97-2.96-.03-15.396 21.005.034z" />
            </svg>
        );
    } else if (name === 'android') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 12" aria-hidden="true" width={size} height={size}>
                <path fill="currentColor" d="M1.54 4.637v3.095c0 .411-.324.74-.736.74-.408 0-.804-.331-.804-.74V4.637c0-.404.396-.735.804-.735.404 0 .735.331.735.735zm.288 4.196a.79.79 0 00.791.791h.532l.008 1.633c0 .986 1.475.978 1.475 0V9.624h.995v1.633c0 .98 1.483.984 1.483 0V9.624h.54a.788.788 0 00.785-.791V4.038H1.828v4.795zm6.628-5.054H1.8c0-1.144.684-2.138 1.7-2.657L2.987.18c-.075-.13.115-.214.179-.101l.519.951a3.61 3.61 0 012.894 0l.517-.95c.067-.115.254-.03.179.102l-.51.94c1.007.519 1.691 1.513 1.691 2.657zM3.894 2.296a.28.28 0 00-.28-.28.277.277 0 00-.273.28c0 .152.123.28.272.28a.28.28 0 00.281-.28zm3.03 0a.279.279 0 00-.272-.28.28.28 0 100 .56c.15 0 .273-.128.273-.28zm2.534 1.606a.733.733 0 00-.735.735v3.095c0 .411.332.74.735.74.412 0 .805-.331.805-.74V4.637c0-.412-.396-.735-.805-.735z" />
            </svg>
        );
    } else if (name === 'apple') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 23" aria-hidden="true" width={size} height={size}>
                <path fill="currentColor" d="M15.86 11.93c-.01-1.85.827-3.246 2.52-4.275-.947-1.355-2.379-2.101-4.269-2.247-1.789-.141-3.744 1.043-4.46 1.043-.756 0-2.49-.993-3.85-.993C2.989 5.503 0 7.701 0 12.171c0 1.32.242 2.686.726 4.092.645 1.85 2.973 6.386 5.402 6.31 1.27-.03 2.167-.902 3.82-.902 1.603 0 2.435.902 3.85.902 2.45-.035 4.557-4.158 5.172-6.012-3.286-1.547-3.11-4.536-3.11-4.632zm-2.852-8.276C14.384 2.02 14.258.534 14.218 0c-1.215.07-2.621.827-3.423 1.759-.882.998-1.4 2.233-1.29 3.623 1.315.101 2.515-.574 3.503-1.728z" />
            </svg>
        );
    } else if (name === 'chevron') {
        return (
            <svg viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={size} height={size}>
                <path fill="currentColor" d="M1.238 3.957a.75.75 0 11-.976-1.139L2.899.558a1 1 0 011.302 0l2.637 2.26a.75.75 0 01-.976 1.14L3.55 1.974 1.238 3.957z" />
            </svg>
        );
    } else if (name === 'tick') {
        return (
            <svg viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={size} height={size}>
                <path fill={'currentColor'} d="M8.873.335a.986.986 0 111.482 1.302L5.128 7.582a.986.986 0 01-1.4.081L.324 4.594A.986.986 0 011.647 3.13l2.66 2.4L8.873.335z" />
            </svg>
        );
    } else if (name === 'plus') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true" width={size} height={size}>
                <path fill={'currentColor'} d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
            </svg>
        );
    } else if (name === 'list') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" aria-hidden="true" width={size} height={size}>
                <path fill={'currentColor'} d="M19.5 16a1.5 1.5 0 010 3h-18a1.5 1.5 0 010-3h18zm0-8a1.5 1.5 0 010 3h-18a1.5 1.5 0 010-3h18zm0-8a1.5 1.5 0 010 3h-18a1.5 1.5 0 010-3h18z" />
            </svg>
        );
    } else if (name === 'search') {
        return (
            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
                <path fill={'currentColor'} d="M10.027 8.624c.033.025.064.053.094.083l2.829 2.829a1 1 0 01-1.414 1.414L8.707 10.12a1.01 1.01 0 01-.083-.094 5.5 5.5 0 111.403-1.403zM5.5 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
            </svg>
        );
    } else if (name === 'person') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true" width={size} height={size}>
                <path fill={'currentColor'} d="M7 6.25a3 3 0 110-6 3 3 0 010 6zm-6.75 6.9c.291-3.58 3.196-5.4 6.738-5.4 3.59 0 6.54 1.72 6.76 5.4.01.147 0 .6-.563.6H.795c-.187 0-.56-.406-.545-.6z"></path>
            </svg>
        );
    } else if (name === 'x') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" aria-hidden="true" width={size} height={size}>
                <g fillRule="evenodd">
                    <g fillRule="nonzero" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
                        <path fill={'currentColor'} d="M8.257.714L.714 8.257m7.543 0L.714.714"></path>
                    </g>
                </g>
            </svg>
        );
    } else if (name === 'chat') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 30 30" aria-hidden="true">
                <g fill="none" fillRule="evenodd">
                    <rect width="30" height="30" rx="15" fill='currentColor'></rect>
                    <path fill="#FFF" fillRule="nonzero" d="M15 8.778c-3.928 0-7.111 2.586-7.111 5.778 0 1.377.594 2.638 1.583 3.63-.347 1.4-1.508 2.647-1.522 2.661a.22.22 0 00-.042.242.218.218 0 00.203.133c1.842 0 3.222-.883 3.906-1.428a8.472 8.472 0 002.983.54c3.928 0 7.111-2.587 7.111-5.778 0-3.192-3.183-5.778-7.111-5.778z"></path>
                </g>
            </svg>
        );
    } else if (name === 'telegram') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 16" aria-hidden="true">
                <path d="M17.949 1.374l-2.717 12.81c-.205.904-.739 1.13-1.498.704l-4.14-3.05-1.996 1.92c-.221.221-.406.406-.832.406l.297-4.215 7.671-6.931c.334-.298-.072-.462-.518-.165L4.733 8.824.65 7.546c-.888-.277-.904-.888.185-1.314L16.804.08c.739-.277 1.386.165 1.145 1.294z" fill='currentColor' />
            </svg>
        );
    }
}