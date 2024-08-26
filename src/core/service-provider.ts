import type {InjectionKey} from "vue";
import type {Message} from "@/core/message";
import type {LoginService, Service, SimpleGetService} from "@/services/service";
import type LogEntry from "@/core/log-entry";
import type {AxiosInstance} from "axios";
import type {Profile} from "@/core/profile";

export const axiosInstanceProviderKey: InjectionKey<AxiosInstance> = Symbol("axiosInstance");
export const messageServiceProviderKey: InjectionKey<Service<Message>> = Symbol('messageServiceProviderKey');
export const logsServiceProviderKey: InjectionKey<Service<LogEntry>> = Symbol('logsServiceProviderKey');
export const profileServiceProviderKey: InjectionKey<SimpleGetService<Profile>> = Symbol('profileServiceProviderKey');
export const loginServiceProviderKey: InjectionKey<LoginService<any>> = Symbol('loginServiceProviderKey');

