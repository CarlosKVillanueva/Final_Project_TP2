const claveAdmin = "ABC123";

export function clasificarUsuarios(req, res, next) {
    if (req.header("palabraSecreta") === claveAdmin) {
        req.isAdmin = true;
    }
    next();
}

export function soloAdmins(req, res, next) {
    if (req.isAdmin) {
        next();
    } else {
        res.sendStatus(403);
    }
}
