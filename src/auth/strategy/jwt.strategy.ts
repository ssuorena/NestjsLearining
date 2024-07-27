
    
    import { Injectable } from "@nestjs/common";
    import { PassportStrategy } from "@nestjs/passport";
    import { Strategy, ExtractJwt } from 'passport-jwt';
    
    @Injectable()
    export class JwtStrategy extends PassportStrategy(Strategy) {
        constructor() {
            super({
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: false,
                secretOrKey: 'secret2',
        
            });
        }
    
        async validate(payload: any) {
            
            return {
                id: payload.sub,
                email: payload.email,
                roles:payload.roles
            };
        }
    }

