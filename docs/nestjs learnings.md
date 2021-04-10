# Interface injection
from [github nestjs pages #43](https://github.com/nestjs/nest/issues/43)
```typescript
@Module({
    controllers: [ UsersController ],
    components: [
        { provide: 'IUserRepository', useClass: UserRepository }
    ],
})
```

```typescript
export class UserController {
    constructor(@Inject('IUserRepository') private userService: IUserRepository) {}
```