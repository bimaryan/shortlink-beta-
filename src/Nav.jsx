import { useState } from 'react';

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-light shadow">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Bit.ly (Beta)</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="https://www.instagram.com/bima_ryan23/" target="_blank">Author</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;