function getQueryParams(url) {
    const queryParams = {}

    url.split('?')[1]?.split('&')?.forEach(param => {
        queryParams[param.split('=')[0]] = param.split('=')[1]
    })

    return queryParams;
}