<?php

namespace App\Controller;

use App\Entity\Intervention;
use App\Repository\InterventionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;


/*
 * Permet de ne renvoyer que les interventions en cours car les autres ne sont pas utiles à l'application mobile.
 */
class GetOnlyCurrentInterventionsController extends AbstractController
{
    public function __construct(
        private InterventionRepository $interventionRepository
    ) {}

    public function __invoke(): array
    {
        return $this->interventionRepository->getCurrentIntervention();
    }
}
