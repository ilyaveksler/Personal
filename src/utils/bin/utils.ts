import * as bin from './index';
import packageJson from '../../../package.json';
import config from '../../../config.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `crash version 1.24.01(1)-release (x86_64-pc-linux-gnu)
  These shell commands are defined internally.  Type 'help' to see this list.
  \n\n${commands}\n\n[tab]\t trigger completion\n[ctrl+l] clear terminal\n[ctrl+c] cancel command`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return config.shell.commands.whoami;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  return config.shell.commands.email;
};

export const vi = async (args: string[]): Promise<string> => {
  return config.shell.commands.vi;
};

export const vim = async (args: string[]): Promise<string> => {
  return config.shell.commands.vim;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return config.shell.commands.emacs;
};

export const sudo = async (args?: string[]): Promise<string> => {
  if (args[0]) {
    return config.shell.commands.sudo;
  }

  return `usage: sudo -h | -K | -k | -V
  usage: sudo -v [-ABknS] [-g group] [-h host] [-p prompt] [-u user]
  usage: sudo -l [-ABknS] [-g group] [-h host] [-p prompt] [-U user] [-u user]
              [command]
  usage: sudo [-ABbEHknPS] [-r role] [-t type] [-C num] [-D directory] [-g group]
              [-h host] [-p prompt] [-R directory] [-T timeout] [-u user]
              [VAR=value] [-i|-s] [<command>]
  usage: sudo -e [-ABknS] [-r role] [-t type] [-C num] [-D directory] [-g group]
              [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] file ...
  `;
};

export const banner = (args?: string[]): string => {
  return config.shell.commands.banner;
};

export const ls = (args?: string[]): string => {
  return config.shell.commands.ls;
};

export const cat = (args?: string[]): string => {
  if (args[0]) {
    return config.shell.commands.cat;
  }
  return ' ';
};
