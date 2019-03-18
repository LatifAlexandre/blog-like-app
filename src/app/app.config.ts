import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  private configs: {} = {
    supportedLanguages: ['en', 'fr', 'it'],
    defaultLanguage: 'en'
  };

  constructor() {}

  public getConfig(key: string | string[]): any {
    let config = this.configs;
    if (Array.isArray(key)) {
      key.forEach((k: string) => {
        if (config[k]) {
          config = config[k];
        } else {
          return null;
        }
      });
    } else {
      config = config[key];
    }
    return config;
  }
}
