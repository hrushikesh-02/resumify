/** @type {import('next').NextConfig} */

const ghpages = true;
module.exports = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    env: {
        ghpages: ghpages,
        ghpath: '/resumify',
    },
    basePath: ghpages ? '/resumify' : '',
};
