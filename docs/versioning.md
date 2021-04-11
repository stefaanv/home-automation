# Versioning

## Create (annotated) git tags

Configuratie : `npm config set git-tag-version true`
Create a new annotated tag : `git tag -a v1.4.0 -m "first fully functional version"`
List all tags : `git tag`
Show detailed info on specified tag : `git show v1.4.0`
Create light-weight tag : `git tag v1.4.1`
Push tags to server : `git push origin --tags` Tags worden dus afzonderlijk naar de renote gepushed !
Bump version : `npm version patch -m "Test patch version bump to %s"`

## Debugging docker build problems

```bash
docker run -it <image> ls -als
docker run -it <image> bash
docker run -it <image> node server.js
```
