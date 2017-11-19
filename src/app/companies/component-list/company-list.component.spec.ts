import { TestBed, async } from '@angular/core/testing';
import { CompanyListComponent } from './company-list.component';
import { CompanyService } from '../company.service';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('Company List Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CompanyListComponent
            ],
            imports: [ RouterTestingModule ],
            providers : [
                CompanyService, HttpClient, HttpHandler
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(CompanyListComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});

