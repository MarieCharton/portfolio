<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



class MainController extends AbstractController
{

    /**
     * @Route("/", name = "homepage")
     */
    public function homepage()
    {
        return $this->render('homepage.html.twig', []);
    }

    /**
     * @Route("/portofolio", name = "portofolio")
     */
    public function portofolio()
    {
        return $this->render('portofolio.html.twig', []);
    }

    /**
     * @Route("/cv", name = "cv")
     */
    public function cv()
    {
        return $this->render('cv.html.twig', []);
    }
}
